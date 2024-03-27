import { INestApplication } from '@fily-cloud/common';
import { NestFactory } from '@fily-cloud/core';
import * as request from 'supertest';
import { AsyncClassApplicationModule } from '../src/async-options-class.module';

describe('GraphQL (async class)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await NestFactory.create(AsyncClassApplicationModule, {
      logger: false,
    });
    await app.init();
  });

  it(`should return query result`, () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: '{\n  getCats {\n    id\n  }\n}\n',
      })
      .expect(200, {
        data: {
          getCats: [
            {
              id: 1,
            },
          ],
        },
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
