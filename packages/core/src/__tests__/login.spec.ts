// Copyright 2020 Cognite AS

import nock from 'nock';
import { AUTHORIZATION_HEADER } from '../constants';
import { CDFHttpClient } from '../httpClient/cdfHttpClient';
import {
  getIdInfoFromAccessToken,
  loginSilently,
  loginWithRedirect,
} from '../login';
import { bearerString } from '../utils';
import {
  authTokens,
  loggedInResponse,
  notLoggedInResponse,
  project,
  projectId,
  mockBaseUrl,
} from '../testUtils';
import { createUniversalRetryValidator } from '../httpClient/retryValidator';

describe('Login', () => {
  const response401 = { error: { code: 401, message: '' } };
  const statusPath = '/login/status';
  const httpClient = new CDFHttpClient(
    mockBaseUrl,
    createUniversalRetryValidator()
  );

  beforeEach(() => {
    window.history.pushState({}, '', '');
    nock.cleanAll();
  });

  describe('loginSilently', () => {
    const authorizeParams = {
      baseUrl: mockBaseUrl,
      project,
      redirectUrl: 'https://redirect.com',
      errorRedirectUrl: 'https://error-redirect.com',
    };
    const spiedCreateElement = jest.spyOn(document, 'createElement');
    const spiedAppendChild = jest.spyOn(document.body, 'appendChild');
    spiedAppendChild.mockImplementation(iframe => {
      // @ts-ignore-next-line
      iframe.onload();
      return iframe;
    });
    const spiedRemoveChild = jest.spyOn(document.body, 'removeChild');
    beforeEach(() => {
      spiedCreateElement.mockReset();
      spiedRemoveChild.mockReset();
      window.history.pushState({}, '', '');
    });
    afterAll(() => {
      spiedCreateElement.mockRestore();
      spiedAppendChild.mockRestore();
      spiedRemoveChild.mockRestore();
    });

    test('exception on error query params', async () => {
      window.history.pushState(
        {},
        '',
        `/some/random/path?query=true&error=failed&error_description=message`
      );
      await expect(
        loginSilently(httpClient, authorizeParams)
      ).rejects.toThrowErrorMatchingInlineSnapshot(`"failed: message"`);
    });

    function createIframe(search: string) {
      return {
        src: '',
        style: {},
        contentWindow: {
          location: {
            search,
          },
        },
      } as HTMLIFrameElement;
    }
    test('silent login', async () => {
      window.history.pushState({}, '', '/abc/def');
      expect.assertions(9);
      const iframe = createIframe(
        `?access_token=${authTokens.accessToken}&id_token=${authTokens.idToken}`
      );
      spiedCreateElement.mockReturnValueOnce(iframe);
      const tokens = await loginSilently(httpClient, authorizeParams);
      expect(tokens).toEqual(authTokens);
      expect(spiedCreateElement).toBeCalledTimes(1);
      expect(spiedCreateElement).toBeCalledWith('iframe');
      expect(spiedAppendChild).toBeCalledWith(iframe);
      expect(spiedAppendChild).toBeCalledTimes(1);
      expect(spiedAppendChild).toBeCalledWith(iframe);
      expect(spiedRemoveChild).toBeCalledTimes(1);
      expect(spiedRemoveChild).toBeCalledWith(iframe);
      expect(iframe.src).toMatchInlineSnapshot(
        `"https://example.com/login/redirect?errorRedirectUrl=https%3A%2F%2Flocalhost%2Fabc%2Fdef&project=TEST_PROJECT&redirectUrl=https%3A%2F%2Flocalhost%2Fabc%2Fdef&prompt=none"`
      );
    });

    test('valid tokens in url', async () => {
      expect.assertions(2);
      window.history.pushState(
        {},
        '',
        `/some/random/path?query=true&access_token=${
          authTokens.accessToken
        }&id_token=${authTokens.idToken}&random=123`
      );
      nock(mockBaseUrl, {
        reqheaders: {
          [AUTHORIZATION_HEADER]: bearerString(authTokens.accessToken),
        },
      })
        .get('/login/status')
        .reply(200, loggedInResponse);
      const tokens = await loginSilently(httpClient, authorizeParams);
      expect(tokens).toEqual(authTokens);
      expect(window.location.href).toMatchInlineSnapshot(
        `"https://localhost/some/random/path?query=true&random=123"`
      );
    });
  });

  describe('getIdInfo', () => {
    const idInfo = {
      project,
      projectId,
      user: 'user@example.com',
    };
    const successResponse = {
      data: {
        loggedIn: true,
        ...idInfo,
      },
    };

    test('successful getIdInfoFromAccessToken', async () => {
      const token = 'abc123';
      nock(mockBaseUrl, {
        reqheaders: { [AUTHORIZATION_HEADER]: bearerString(token) },
      })
        .get(statusPath)
        .once()
        .reply(200, successResponse);
      await expect(
        getIdInfoFromAccessToken(httpClient, token)
      ).resolves.toEqual(idInfo);
    });

    test('getIdInfoFromAccessToken - 401', async () => {
      const token = 'abc123';
      nock(mockBaseUrl)
        .get(statusPath)
        .once()
        .reply(401, response401);
      await expect(
        getIdInfoFromAccessToken(httpClient, token)
      ).resolves.toBeNull();
    });

    test('getIdInfoFromAccessToken - not logged in', async () => {
      const token = 'abc123';
      nock(mockBaseUrl)
        .get(statusPath)
        .reply(200, notLoggedInResponse);
      await expect(
        getIdInfoFromAccessToken(httpClient, token)
      ).resolves.toBeNull();
    });
  });

  describe('loginWithRedirect', () => {
    const { location } = window;

    beforeAll(() => {
      delete window.location;
      window.location = { ...location, reload: jest.fn() };
    });

    afterAll(() => {
      window.location = location;
    });

    test('redirects', async done => {
      const spiedLocationAssign = jest
        .spyOn(window.location, 'assign')
        .mockImplementation();
      let isPromiseResolved = false;
      loginWithRedirect({
        baseUrl: 'https://example.com',
        project: 'my-tenant',
        redirectUrl: 'https://redirect.com',
        errorRedirectUrl: 'https://error-redirect.com',
      }).then(() => {
        isPromiseResolved = true;
      });
      expect(spiedLocationAssign).toBeCalledTimes(1);
      expect(spiedLocationAssign.mock.calls[0][0]).toMatchInlineSnapshot(
        `"https://example.com/login/redirect?errorRedirectUrl=https%3A%2F%2Ferror-redirect.com&project=my-tenant&redirectUrl=https%3A%2F%2Fredirect.com"`
      );
      setTimeout(() => {
        expect(isPromiseResolved).toBe(false);
        done();
      }, 1000);
    });
  });
});
