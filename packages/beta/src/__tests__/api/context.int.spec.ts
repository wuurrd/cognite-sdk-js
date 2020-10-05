// Copyright 2020 Cognite AS

import {
  randomInt,
  runTestWithRetryWhenFailing,
} from '@cognite/sdk-core/src/testUtils';
import { Asset, Timeseries } from 'stable/src/types';
import CogniteClient from '../../cogniteClient';
import { setupLoggedInClient } from '../testUtils';

describe('context integration test', () => {
  const assetNameA = `entity_match_test_asset_a ${randomInt()}`;
  const assetNameB = `entity_match_test_asset_b ${randomInt()}`;
  const tsNameA = `TS_${assetNameA}`;
  const tsNameB = `TS_${assetNameB}`;

  let client: CogniteClient;
  let assetA: Asset;
  let assetB: Asset;
  let tsA: Timeseries;
  let tsB: Timeseries;

  beforeAll(async () => {
    client = setupLoggedInClient();
    [assetA, assetB] = await client.assets.create([
      { externalId: assetNameA, name: assetNameA },
      { externalId: assetNameB, name: assetNameB },
    ]);
    [tsA, tsB] = await client.timeseries.create([
      { externalId: tsNameA, name: tsNameA },
      { externalId: tsNameB, name: tsNameB },
    ]);
  });

  describe('Entity Matching', () => {
    const fitExternalId = 'entity_matching_test_fit' + randomInt();
    test('fit', async () => {
      const result = await client.context.entityMatchingFit({
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
        externalId: fitExternalId,
        idField: 'id',
      });
      expect(result.externalId).toBe(fitExternalId);
    });
    test('retrieveModel', async () => {
      await runTestWithRetryWhenFailing(async () => {
        const [result] = await client.context.entityMatchingRetrieveModel([
          { externalId: fitExternalId },
        ]);
        expect(result.externalId).toBe(fitExternalId);
        expect(result.status).toBe('Completed');
      });
      expect.hasAssertions();
    });
    test('delete', async () => {
      const result = await client.context.entityMatchingDelete([
        { externalId: fitExternalId },
      ]);
      expect(result).toEqual({});
    });
  });

  afterAll(async () => {
    await client.assets.delete([
      { externalId: assetNameA },
      { externalId: assetNameB },
    ]);
  });
});
