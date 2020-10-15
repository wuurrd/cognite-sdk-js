// Copyright 2020 Cognite AS

import {
  BaseResourceAPI,
  CursorAndAsyncIterator,
  IdEither,
} from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  EntityMatchingRefitRequest,
  EntityMatchingRefitResponse,
  EntityMatchingChange,
  EntityMatchingPredictRequest,
  EntityMatchingPredictResponse,
  ContextJobId,
  EntityMatchingPredictions,
  EntityMatchingModel,
  EntityMatchingFilterRequest,
} from '../../types';

export class EntityMatchingApi extends BaseResourceAPI<EntityMatchingModel> {
  // TODO: fix timestamps conversion
  // protected getDateProps() {
  //   return this.pickDateProps(
  //     ['items'],
  //     ['createdTime', ...]
  //   );
  // }

  // TODO: this will be renamed to "create"
  /**
   * [Create entity matcher](https://docs.cognite.com/api/playground/#operation/entityMatchingFit)
   *
   * ```js
   * await client.entityMatching.create({
   *  matchFrom: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],
   *  matchTo: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],
   *  externalId: 'model123',
   *  name: 'model123',
   * });
   * ```
   */
  public create = async (
    scope: EntityMatchingFitRequest
  ): Promise<EntityMatchingFitResponse> => {
    const path = this.url();
    const response = await this.post<EntityMatchingFitResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };

  /**
   * [Retrieve entity matching models](https://docs.cognite.com/api/playground/#operation/entityMatchingRetrive)
   *
   * ```js
   * await client.entityMatching.retrieve([{ externalId: 'model123' }]);
   * ```
   */
  public retrieve = (ids: IdEither[]): Promise<EntityMatchingModel[]> => {
    return super.retrieveEndpoint(ids);
  };

  /**
   * [List entity matching models](https://docs.cognite.com/api/playground/#operation/entityMatchingFilter)
   *
   * ```js
   * await client.entityMatching.list({ filter: { name: 'model123' }});
   * ```
   */
  public list = (
    scope?: EntityMatchingFilterRequest
  ): CursorAndAsyncIterator<EntityMatchingModel> => {
    return super.listEndpoint(this.callListEndpointWithPost, scope);
  };

  /**
   * [Update entity matching models](https://docs.cognite.com/api/playground/#operation/entityMatchingUpdate)
   *
   * ```js
   * await client.entityMatching.update([{
   *  externalId: 'model123',
   *  update: { description: { set: 'ø' }}
   * }]);
   * ```
   */
  public update = (
    changes: EntityMatchingChange[]
  ): Promise<EntityMatchingModel[]> => {
    return super.updateEndpoint(changes);
  };

  /**
   * [Delete entity matcher model](https://docs.cognite.com/api/playground/#operation/entityMatchingDelete)
   *
   * ```js
   * await client.entityMatching.delete([{ externalId: 'model123' }]);
   * ```
   */
  public delete = async (ids: IdEither[]): Promise<{}> => {
    return super.deleteEndpoint(ids);
  };

  /**
   * [Predict matches](https://docs.cognite.com/api/playground/#operation/entityMatchingPredict)
   *
   * ```js
   * await client.entityMatching.predict({
   *  externalId: 'model123',
   *  matchFrom: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],
   *  matchTo: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],
   * });
   * ```
   */
  public predict = async (
    scope: EntityMatchingPredictRequest
  ): Promise<EntityMatchingPredictResponse> => {
    const path = this.url('predict');
    const response = await this.post<EntityMatchingPredictResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };

  /**
   * [Retrieve entity matcher predict result](https://docs.cognite.com/api/playground/#operation/entityMatchingPredictResults)
   *
   * ```js
   * await client.entityMatching.predictResult(12345678);
   * ```
   */
  public predictResult = async (
    jobId: ContextJobId
  ): Promise<EntityMatchingPredictions> => {
    const path = this.url(`jobs/${jobId}`);
    const response = await this.get<EntityMatchingPredictions>(path);
    return this.addToMapAndReturn(response.data, response);
  };

  /**
   * [Re-fit entity matcher model](https://docs.cognite.com/api/playground/#operation/entityMatchingReFit)
   *
   * ```js
   * await client.entityMatching.refit({
   *  newExternalId: 'newModel123',
   *  matchFrom: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],
   *  matchTo: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],
   *  externalId: 'model123',
   *  trueMatches: [{fromExternalId: 'asset1', toExternalId: 'ts1'}]
   * });
   * ```
   */
  public refit = async (
    scope: EntityMatchingRefitRequest
  ): Promise<EntityMatchingRefitResponse> => {
    const path = this.url('refit');
    const response = await this.post<EntityMatchingRefitResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
}
