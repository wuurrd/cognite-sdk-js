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
    const modelExternalId = 'entity_matching_test_fit' + randomInt();
    const newModelExternalId = 'entity_matching_test_refit' + randomInt();
    test('fit model', async () => {
      const result = await client.context.entityMatchingFit({
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
        externalId: modelExternalId,
        name: modelExternalId,
        idField: 'id',
      });
      expect(result.externalId).toBe(modelExternalId);
    });

    test('list models', async () => {
      const { items } = await client.context.entityMatchingList({
        filter: { name: modelExternalId },
      });
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].name).toBe(modelExternalId);
    });

    test('update model', async () => {
      const [item] = await client.context.entityMatchingUpdate([
        {
          externalId: modelExternalId,
          update: { description: { set: 'ø' } },
        },
      ]);
      expect(item.description).toBe('ø');
    });

    test('retrieve model', async () => {
      await runTestWithRetryWhenFailing(async () => {
        const [result] = await client.context.entityMatchingRetrieveModel([
          { externalId: modelExternalId },
        ]);
        expect(result.externalId).toBe(modelExternalId);
        expect(result.status).toBe('Completed');
      });
      expect.hasAssertions();
    });

    test('predict', async () => {
      const predictResponse = await client.context.entityMatchingPredict({
        externalId: modelExternalId,
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
      });
      expect(predictResponse.status).toBe('Queued');
      const predictResponseJobId = predictResponse.jobId;
      await runTestWithRetryWhenFailing(async () => {
        const retrievePredictResultResponse = await client.context.entityMatchingRetrievePredictResult(
          predictResponseJobId
        );
        expect(retrievePredictResultResponse.status).toBe('Completed');
      });
      expect.hasAssertions();
    });
    test('refit model', async () => {
      const refitResult = await client.context.entityMatchingRefit({
        newExternalId: newModelExternalId,
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
        externalId: modelExternalId,
        trueMatches: [[assetA.id, tsA.id]],
      });
      expect(refitResult.externalId).toBe(newModelExternalId);
      await runTestWithRetryWhenFailing(async () => {
        const [result] = await client.context.entityMatchingRetrieveModel([
          { id: refitResult.id },
        ]);
        expect(result.externalId).toBe(newModelExternalId);
        expect(result.status).toBe('Completed');
      });
      expect.hasAssertions();
    });

    test('delete model', async () => {
      const result = await client.context.entityMatchingDelete([
        { externalId: modelExternalId },
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
