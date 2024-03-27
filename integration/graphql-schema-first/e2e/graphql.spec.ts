import { INestApplication } from '@fily-cloud/common';
import { Test } from '@fily-cloud/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('GraphQL', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
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
