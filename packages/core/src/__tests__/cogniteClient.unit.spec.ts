// Copyright 2020 Cognite AS

import nock from 'nock';
import BaseCogniteClient, { POPUP, REDIRECT } from '../baseCogniteClient';
import {
  API_KEY_HEADER,
  AUTHORIZATION_HEADER,
  X_CDF_SDK_HEADER,
  BASE_URL,
} from '../constants';
import * as Login from '../login';
import { bearerString, sleepPromise } from '../utils';
import { apiKey, authTokens, project } from '../testUtils';

const mockBaseUrl = 'https://example.com';

function setupClient(baseUrl: string = BASE_URL) {
  return new BaseCogniteClient({ appId: 'JS SDK integration tests', baseUrl });
}

function setupMockableClient() {
  const client = setupClient(mockBaseUrl);
  client.loginWithApiKey({
    project,
    apiKey,
  });
  return client;
}

describe('CogniteClient', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  describe('constructor', () => {
    test('throw on missing parameter', () => {
      expect(() => {
        // @ts-ignore
        new BaseCogniteClient();
      }).toThrowErrorMatchingInlineSnapshot(
        `"\`CogniteClient\` is missing parameter \`options\`"`
      );
    });

    test('missing appId', () => {
      expect(() => {
        // @ts-ignore
        new BaseCogniteClient({});
      }).toThrowErrorMatchingInlineSnapshot(
        `"options.appId is required and must be of type string"`
      );
    });

    test('invalid appId', () => {
      expect(() => {
        // @ts-ignore
        new BaseCogniteClient({ appId: 12 });
      }).toThrowErrorMatchingInlineSnapshot(
        `"options.appId is required and must be of type string"`
      );
    });
  });

  describe('loginWithApiKey', () => {
    test('missing parameter', async () => {
      const client = setupClient();
      expect(
        // @ts-ignore
        () => client.loginWithApiKey()
      ).toThrowErrorMatchingInlineSnapshot(
        `"\`loginWithApiKey\` is missing parameter \`options\`"`
      );
    });

    test('missing project', async () => {
      const client = setupClient();
      expect(
        // @ts-ignore
        () => client.loginWithApiKey({})
      ).toThrowErrorMatchingInlineSnapshot(
        `"options.project is required and must be of type string"`
      );
    });

    test('missing api key', async () => {
      const client = setupClient();
      expect(
        // @ts-ignore
        () => client.loginWithApiKey({ project })
      ).toThrowErrorMatchingInlineSnapshot(
        `"options.apiKey is required and must be of type string"`
      );
    });

    test('create client with invalid api-key/project', async () => {
      const client = setupClient();
      client.loginWithApiKey({
        project,
        apiKey,
      });
    });

    test('set correct apikey', async () => {
      const client = setupMockableClient();
      nock(mockBaseUrl, { reqheaders: { [API_KEY_HEADER]: apiKey } })
        .get('/test')
        .reply(200, {});
      await client.get('/test');
      expect(client.getDefaultRequestHeaders()).toMatchObject({
        [API_KEY_HEADER]: apiKey,
      });
    });

    test('set correct project', async () => {
      const client = setupClient();
      client.loginWithApiKey({
        project,
        apiKey,
      });
      expect(client.project).toBe(project);
    });
  });

  test('getDefaultRequestHeaders() returns clone', () => {
    const client = setupMockableClient();
    const headers = client.getDefaultRequestHeaders();
    headers[API_KEY_HEADER] = 'overriden';
    const expectedHeaders = { [API_KEY_HEADER]: apiKey };
    nock(mockBaseUrl, { reqheaders: expectedHeaders })
      .get('/')
      .reply(200, {});
  });

  test('getBaseUrl() returns set value', () => {
    const baseUrl = 'https://example.com';
    const client = setupMockableClient();
    client.setBaseUrl(baseUrl);
    expect(client.getBaseUrl()).toEqual(baseUrl);
  });

  describe('http requests', () => {
    let client: BaseCogniteClient;

    beforeAll(async () => {
      client = setupMockableClient();
    });

    test('get method', async () => {
      nock(mockBaseUrl)
        .get('/')
        .once()
        .reply(200, []);
      const response = await client.get('/');
      expect(response.data).toEqual([]);
    });

    test('post method', async () => {
      nock(mockBaseUrl)
        .post('/')
        .once()
        .reply(200, []);
      const response = await client.post('/');
      expect(response.data).toEqual([]);
    });

    test('put method', async () => {
      nock(mockBaseUrl)
        .put('/')
        .once()
        .reply(200, []);
      const response = await client.put('/', {
        responseType: 'json',
      });
      expect(response.data).toEqual([]);
    });

    test('delete method', async () => {
      nock(mockBaseUrl)
        .delete('/')
        .once()
        .reply(200, 'abc');
      const response = await client.delete('/', { responseType: 'text' });
      expect(response.data).toBe('abc');
    });
  });

  describe('loginWithOAuth', () => {
    test('missing parameter', async () => {
      const client = setupClient();
      expect(
        // @ts-ignore
        () => client.loginWithOAuth()
      ).toThrowErrorMatchingInlineSnapshot(
        `"\`loginWithOAuth\` is missing parameter \`options\`"`
      );
    });

    test('missing project name', async () => {
      const client = setupClient();
      expect(
        // @ts-ignore
        () => client.loginWithOAuth({})
      ).toThrowErrorMatchingInlineSnapshot(
        `"options.project is required and must be of type string"`
      );
    });

    describe('authentication', () => {
      let mockLoginSilently: jest.SpyInstance;
      let mockRedirect: jest.SpyInstance;
      let mockPopup: jest.SpyInstance;

      beforeEach(() => {
        mockLoginSilently = jest.spyOn(Login, 'loginSilently');
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        mockLoginSilently.mockImplementation(() => {});

        mockRedirect = jest.spyOn(Login, 'loginWithRedirect');
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        mockRedirect.mockImplementation(async () => {});

        mockPopup = jest.spyOn(Login, 'loginWithPopup');
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        mockPopup.mockImplementation(async () => {});
      });

      afterEach(() => {
        mockLoginSilently.mockRestore();
        mockRedirect.mockRestore();
      });

      test('default onAuthenticate function should be redirect', async done => {
        const client = setupClient();
        client.loginWithOAuth({ project });
        mockRedirect.mockImplementationOnce(async () => {
          done();
        });
        client.authenticate();
      });

      test('onAuthenticate: REDIRECT', async done => {
        const client = setupClient();
        client.loginWithOAuth({
          project,
          onAuthenticate: REDIRECT,
        });
        mockRedirect.mockImplementationOnce(async () => {
          done();
        });
        await client.authenticate();
      });

      test('onAuthenticate: POPUP', async done => {
        const client = setupClient();
        client.loginWithOAuth({
          project,
          onAuthenticate: POPUP,
        });
        mockPopup.mockImplementationOnce(async () => {
          done();
          return {};
        });
        await client.authenticate();
      });

      test('should call onAuthenticate on 401', async () => {
        const onAuthenticate = jest.fn();
        const client = setupClient(mockBaseUrl);
        client.loginWithOAuth({
          project,
          onAuthenticate,
        });
        onAuthenticate.mockImplementation(login => {
          login.skip();
        });
        nock(mockBaseUrl)
          .get('/401')
          .once()
          .reply(401, {});
        await expect(
          client.get('/401')
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Request failed | status code: 401"`
        );
        expect(mockLoginSilently).toHaveBeenCalledTimes(1);
      });

      test('should send one-time header again after silent login', async () => {
        const disposableSdkHeader = 'something';
        const onAuthenticate = jest.fn();
        const client = setupClient(mockBaseUrl);
        client.loginWithOAuth({ project, onAuthenticate });
        client.setOneTimeSdkHeader(disposableSdkHeader);
        mockLoginSilently.mockReturnValueOnce(authTokens);
        const reqheaders = { [X_CDF_SDK_HEADER]: disposableSdkHeader };
        const normalReqheaders = { [X_CDF_SDK_HEADER]: /CogniteJavaScriptSDK/ };

        nock(mockBaseUrl, { reqheaders })
          .get('/')
          .once()
          .reply(401, {})
          .get('/')
          .once()
          .reply(200, {});
        nock(mockBaseUrl, { reqheaders: normalReqheaders })
          .get('/')
          .once()
          .reply(200, {});

        await client.get('/');
        await client.get('/');
      });

      test('manually trigger authentication', async () => {
        const onAuthenticate = jest.fn().mockImplementationOnce(login => {
          login.skip();
        });
        const client = setupClient(mockBaseUrl);
        client.loginWithOAuth({
          project,
          onAuthenticate,
        });
        await expect(client.authenticate()).resolves.toBe(false);
        expect(mockLoginSilently).toHaveBeenCalledTimes(1);
      });

      test('handle error query params', async () => {
        const onAuthenticate = jest.fn();
        const client = setupClient(mockBaseUrl);
        client.loginWithOAuth({
          project,
          onAuthenticate,
        });
        const errorMessage = 'Failed login';
        mockLoginSilently.mockImplementationOnce(() => {
          throw Error(errorMessage);
        });
        await expect(client.authenticate()).rejects.toThrowError(errorMessage);
      });

      test('retry request after silent login', async () => {
        const onAuthenticate = jest.fn();
        const client = setupClient(mockBaseUrl);
        client.loginWithOAuth({
          project,
          onAuthenticate,
        });
        mockLoginSilently.mockReturnValueOnce(authTokens);
        nock(mockBaseUrl, { badheaders: [AUTHORIZATION_HEADER] })
          .get('/')
          .once()
          .reply(401, {});
        nock(mockBaseUrl, {
          reqheaders: {
            [AUTHORIZATION_HEADER]: bearerString(authTokens.accessToken),
          },
        })
          .get('/')
          .once()
          .reply(200, []);
        const response = await client.get('/');
        expect(response.data).toEqual([]);
      });

      test('dont call onAuthenticate twice when first call hasnt returned yet', async () => {
        const client = setupClient(mockBaseUrl);
        const onAuthenticate = jest.fn().mockImplementationOnce(async login => {
          await sleepPromise(100);
          login.skip();
        });
        client.loginWithOAuth({
          project,
          onAuthenticate,
        });
        nock(mockBaseUrl)
          .get('/401')
          .once()
          .reply(401);
        let promise401Throwed = false;
        client.get('/401').catch(() => {
          promise401Throwed = true;
        });
        const promiseAuthenticate = client.authenticate();
        await sleepPromise(200);
        expect(onAuthenticate).toBeCalledTimes(1);
        expect(promise401Throwed).toBe(true);
        await expect(promiseAuthenticate).resolves.toBe(false);
      });

      describe('cached access token', () => {
        test('should be able to provide an access token', async () => {
          const client = setupClient(mockBaseUrl);
          client.loginWithOAuth({
            project,
            accessToken: authTokens.accessToken,
          });
          nock(mockBaseUrl, {
            reqheaders: {
              [AUTHORIZATION_HEADER]: bearerString(authTokens.accessToken),
            },
          })
            .get('/')
            .once()
            .reply(200, {});
          await client.get('/');
        });

        test('re-authenticate on 401', async done => {
          const client = setupClient(mockBaseUrl);
          client.loginWithOAuth({
            project,
            accessToken: authTokens.accessToken,
            onAuthenticate: () => done(),
          });
          nock(mockBaseUrl)
            .get('/')
            .once()
            .reply(401, {});
          client.get('/');
        });
      });
    });
  });
});
