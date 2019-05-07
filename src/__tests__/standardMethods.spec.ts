// Copyright 2019 Cognite AS

import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MetadataMap } from '../metadata';
import { generateListEndpoint } from '../standardMethods';
import { sleepPromise } from '../utils';

function numberGeneratorAPIEndpoint(config: AxiosRequestConfig) {
  const params = config.params || {};
  const cursor = Number(params.cursor);
  if (cursor > 10) {
    return [200, { data: { items: [cursor] } }];
  } else if (isNaN(cursor)) {
    return [200, { data: { items: [0, 1], nextCursor: '2' } }];
  } else {
    return [
      200,
      {
        data: {
          items: [cursor, cursor + 1],
          nextCursor: `${cursor + 2}`,
        },
      },
    ];
  }
}

describe('standard methods', () => {
  function createMockedListEndpoint() {
    const axiosInstance = axios.create();
    const listEndpoint = generateListEndpoint<any, number>(
      axiosInstance,
      '/',
      new MetadataMap()
    );
    const axiosMock = new MockAdapter(axiosInstance);
    axiosMock.onGet('/').reply(numberGeneratorAPIEndpoint);
    return listEndpoint;
  }

  describe('generateListEndpoint', () => {
    test('for-await', async () => {
      const listEndpoint = createMockedListEndpoint();
      const numbers = [];
      for await (const item of listEndpoint()) {
        numbers.push(item);
      }
      expect(numbers).toMatchSnapshot();
    });

    test('autoPagingToArray', async () => {
      const listEndpoint = createMockedListEndpoint();
      await expect(
        listEndpoint().autoPagingToArray({ limit: 1 })
      ).resolves.toMatchSnapshot();
      await expect(
        listEndpoint().autoPagingToArray({ limit: 3 })
      ).resolves.toMatchSnapshot();
      await expect(
        listEndpoint().autoPagingToArray({ limit: 100 })
      ).resolves.toMatchSnapshot();

      await expect(
        // @ts-ignore
        listEndpoint().autoPagingToArray()
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `"You must pass a \`limit\` option to autoPagingToArray, eg; \`autoPagingToArray({limit: 1000});\`."`
      );

      await expect(
        listEndpoint().autoPagingToArray({ limit: Infinity })
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `"You cannot specify a limit of more than 10,000 items to fetch in \`autoPagingToArray\`; use \`autoPagingEach\` or for-await to iterate through longer lists."`
      );
    });

    test('authPagingForEach', async () => {
      const listEndpoint = createMockedListEndpoint();

      // sync handler
      {
        const numbers: number[] = [];
        await listEndpoint().autoPagingEach(item => {
          numbers.push(item);
          if (numbers.length >= 3) {
            return false;
          }
        });
        expect(numbers).toMatchSnapshot();
      }

      // async handler
      {
        const numbers: number[] = [];
        await listEndpoint().autoPagingEach(async item => {
          numbers.push(item);
          await sleepPromise(10);
          if (numbers.length >= 3) {
            return false;
          }
        });
        expect(numbers).toMatchSnapshot();
      }

      // returning explicit true
      {
        const numbers: number[] = [];
        await listEndpoint().autoPagingEach(async item => {
          numbers.push(item);
          return numbers.length < 3;
        });
        expect(numbers).toMatchSnapshot();
      }
    });
  });
});