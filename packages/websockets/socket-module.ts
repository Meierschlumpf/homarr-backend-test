import { InjectionToken } from '@fily-cloud/common/interfaces';
import { Injectable } from '@fily-cloud/common/interfaces/injectable.interface';
import { NestApplicationContextOptions } from '@fily-cloud/common/interfaces/nest-application-context-options.interface';
import { ApplicationConfig } from '@fily-cloud/core/application-config';
import { GuardsConsumer } from '@fily-cloud/core/guards/guards-consumer';
import { GuardsContextCreator } from '@fily-cloud/core/guards/guards-context-creator';
import { loadAdapter } from '@fily-cloud/core/helpers/load-adapter';
import { NestContainer } from '@fily-cloud/core/injector/container';
import { InstanceWrapper } from '@fily-cloud/core/injector/instance-wrapper';
import { GraphInspector } from '@fily-cloud/core/inspector/graph-inspector';
import { InterceptorsConsumer } from '@fily-cloud/core/interceptors/interceptors-consumer';
import { InterceptorsContextCreator } from '@fily-cloud/core/interceptors/interceptors-context-creator';
import { PipesConsumer } from '@fily-cloud/core/pipes/pipes-consumer';
import { PipesContextCreator } from '@fily-cloud/core/pipes/pipes-context-creator';
import { iterate } from 'iterare';
import { AbstractWsAdapter } from './adapters';
import { GATEWAY_METADATA } from './constants';
import { ExceptionFiltersContext } from './context/exception-filters-context';
import { WsContextCreator } from './context/ws-context-creator';
import { WsProxy } from './context/ws-proxy';
import { NestGateway } from './interfaces/nest-gateway.interface';
import { SocketServerProvider } from './socket-server-provider';
import { SocketsContainer } from './sockets-container';
import { WebSocketsController } from './web-sockets-controller';

export class SocketModule<
  THttpServer = any,
  TAppOptions extends
    NestApplicationContextOptions = NestApplicationContextOptions,
> {
  private readonly socketsContainer = new SocketsContainer();
  private applicationConfig: ApplicationConfig;
  private webSocketsController: WebSocketsController;
  private isAdapterInitialized: boolean;
  private httpServer: THttpServer | undefined;
  private appOptions: TAppOptions;

  public register(
    container: NestContainer,
    applicationConfig: ApplicationConfig,
    graphInspector: GraphInspector,
    appOptions: TAppOptions,
    httpServer?: THttpServer,
  ) {
    this.applicationConfig = applicationConfig;
    this.appOptions = appOptions;
    this.httpServer = httpServer;

    const contextCreator = this.getContextCreator(container);
    const serverProvider = new SocketServerProvider(
      this.socketsContainer,
      applicationConfig,
    );
    this.webSocketsController = new WebSocketsController(
      serverProvider,
      applicationConfig,
      contextCreator,
      graphInspector,
      this.appOptions,
    );
    const modules = container.getModules();
    modules.forEach(({ providers }, moduleName: string) =>
      this.connectAllGateways(providers, moduleName),
    );
  }

  public connectAllGateways(
    providers: Map<InjectionToken, InstanceWrapper<Injectable>>,
    moduleName: string,
  ) {
    iterate(providers.values())
      .filter(wrapper => wrapper && !wrapper.isNotMetatype)
      .forEach(wrapper => this.connectGatewayToServer(wrapper, moduleName));
  }

  public connectGatewayToServer(
    wrapper: InstanceWrapper<Injectable>,
    moduleName: string,
  ) {
    const { instance, metatype } = wrapper;
    const metadataKeys = Reflect.getMetadataKeys(metatype);
    if (!metadataKeys.includes(GATEWAY_METADATA)) {
      return;
    }
    if (!this.isAdapterInitialized) {
      this.initializeAdapter();
    }
    this.webSocketsController.connectGatewayToServer(
      instance as NestGateway,
      metatype,
      moduleName,
      wrapper.id,
    );
  }

  public async close(): Promise<any> {
    if (!this.applicationConfig) {
      return;
    }
    const adapter = this.applicationConfig.getIoAdapter();
    if (!adapter) {
      return;
    }
    const servers = this.socketsContainer.getAll();
    await Promise.all(
      iterate(servers.values())
        .filter(({ server }) => server)
        .map(async ({ server }) => adapter.close(server)),
    );
    await (adapter as AbstractWsAdapter)?.dispose();

    this.socketsContainer.clear();
  }

  private initializeAdapter() {
    const adapter = this.applicationConfig.getIoAdapter();
    if (adapter) {
      this.isAdapterInitialized = true;
      return;
    }
    const { IoAdapter } = loadAdapter(
      '@fily-cloud/platform-socket.io',
      'WebSockets',
      () => require('@fily-cloud/platform-socket.io'),
    );
    const ioAdapter = new IoAdapter(this.httpServer);
    this.applicationConfig.setIoAdapter(ioAdapter);

    this.isAdapterInitialized = true;
  }

  private getContextCreator(container: NestContainer): WsContextCreator {
    return new WsContextCreator(
      new WsProxy(),
      new ExceptionFiltersContext(container),
      new PipesContextCreator(container),
      new PipesConsumer(),
      new GuardsContextCreator(container),
      new GuardsConsumer(),
      new InterceptorsContextCreator(container),
      new InterceptorsConsumer(),
    );
  }
}
