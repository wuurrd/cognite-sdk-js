// Copyright 2020 Cognite AS

import {
  randomInt,
  runTestWithRetryWhenFailing,
} from '@cognite/sdk-core/src/testUtils';
import { ExternalEntityToMatch } from '../../types';
import CogniteClient from '../../cogniteClient';
import { setupLoggedInClient } from '../testUtils';

describe('context integration test', () => {
  const assetNameA = `entity_match_test_asset_a ${randomInt()}`;
  const assetNameB = `entity_match_test_asset_b ${randomInt()}`;
  const tsNameA = `TS_${assetNameA}`;
  const tsNameB = `TS_${assetNameB}`;

  let client: CogniteClient;
  let assetA: ExternalEntityToMatch;
  let assetB: ExternalEntityToMatch;
  let tsA: ExternalEntityToMatch;
  let tsB: ExternalEntityToMatch;

  beforeAll(async () => {
    client = setupLoggedInClient();
    [assetA, assetB] = [
      { externalId: assetNameA, name: assetNameA },
      { externalId: assetNameB, name: assetNameB },
    ];
    [tsA, tsB] = [
      { externalId: tsNameA, name: tsNameA },
      { externalId: tsNameB, name: tsNameB },
    ];
  });

  describe('Entity Matching', () => {
    const modelExternalId = 'entity_matching_test_fit' + randomInt();
    const newModelExternalId = 'entity_matching_test_refit' + randomInt();
    test('fit model', async () => {
      const result = await client.entityMatching.fit({
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
        externalId: modelExternalId,
        name: modelExternalId,
      });
      expect(result.externalId).toBe(modelExternalId);
    });

    test('list models', async () => {
      const { items } = await client.entityMatching.list({
        filter: { name: modelExternalId },
      });
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].name).toBe(modelExternalId);
    });

    test('update model', async () => {
      const [item] = await client.entityMatching.update([
        {
          externalId: modelExternalId,
          update: { description: { set: 'ø' } },
        },
      ]);
      expect(item.description).toBe('ø');
    });

    test('retrieve model', async () => {
      await runTestWithRetryWhenFailing(async () => {
        const [result] = await client.entityMatching.retrieve([
          { externalId: modelExternalId },
        ]);
        expect(result.externalId).toBe(modelExternalId);
        expect(result.status).toBe('Completed');
      });
      expect.hasAssertions();
    });

    test('predict', async () => {
      const predictResponse = await client.entityMatching.predict({
        externalId: modelExternalId,
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
      });
      expect(predictResponse.status).toBe('Queued');
      const predictResponseJobId = predictResponse.jobId;
      await runTestWithRetryWhenFailing(async () => {
        const retrievePredictResultResponse = await client.entityMatching.predictResult(
          predictResponseJobId
        );
        expect(retrievePredictResultResponse.status).toBe('Completed');
      });
      expect.hasAssertions();
    });
    test('refit model', async () => {
      const refitResult = await client.entityMatching.refit({
        newExternalId: newModelExternalId,
        matchFrom: [assetA, assetB],
        matchTo: [tsA, tsB],
        externalId: modelExternalId,
        trueMatches: [
          { fromExternalId: assetA.externalId!, toExternalId: tsA.externalId! },
        ],
      });
      expect(refitResult.externalId).toBe(newModelExternalId);
      await runTestWithRetryWhenFailing(async () => {
        const [result] = await client.entityMatching.retrieve([
          { id: refitResult.id },
        ]);
        expect(result.externalId).toBe(newModelExternalId);
        expect(result.status).toBe('Completed');
      });
      expect.hasAssertions();
    });

    test('delete model', async () => {
      const result = await client.entityMatching.delete([
        { externalId: modelExternalId },
      ]);
      expect(result).toEqual({});
    });

    afterAll(async () => {
      await client.entityMatching.delete([{ externalId: modelExternalId }]);
    });
  });
});