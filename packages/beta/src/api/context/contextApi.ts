// Copyright 2020 Cognite AS

import {
  BaseResourceAPI,
  CDFHttpClient,
  MetadataMap,
  IdEither,
  CursorAndAsyncIterator,
} from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  EntityMatchingRefitRequest,
  EntityMatchingRefitResponse,
  ContextJobId,
  EntityMatchingRetrievePredictResponse,
  EntityMatchingRetrieveModelResponseItem,
  EntityMatchingFilterRequest,
  EntityMatchingModel,
  EntityMatchingPredictRequest,
  EntityMatchingPredictResponse,
  EntityMatchingChange,
} from '../../types';
import { EntityMatchingApi } from './entityMatchingApi';

export class ContextApi extends BaseResourceAPI<unknown> {
  private entityMatchingApi: EntityMatchingApi;

  /** @hidden */
  constructor(
    resourcePath: string,
    httpClient: CDFHttpClient,
    map: MetadataMap
  ) {
    super(resourcePath, httpClient, map);
    this.entityMatchingApi = new EntityMatchingApi(
      this.url('entitymatching'),
      httpClient,
      map
    );
  }
  /**
   * [Fit entity matcher](https://docs.cognite.com/api/playground/#operation/entityMatchingFit)
   *
   * ```js
   * await client.context.entityMatchingFit({
   *  matchFrom: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],
   *  matchTo: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],
   *  externalId: 'model123',
   *  name: 'model123',
   *  idField: 'external_id'
   * });
   * ```
   */
  public entityMatchingFit = (
    scope: EntityMatchingFitRequest
  ): Promise<EntityMatchingFitResponse> => {
    return this.entityMatchingApi.fit(scope);
  };
  /**
   * [Retrieve entity matching models](https://docs.cognite.com/api/playground/#operation/entityMatchingRetrive)
   * ```js
   * await client.context.entityMatchingRetrieveModel({
   *   { externalId: 'model123' }
   * });
   * ```
   */
  public entityMatchingRetrieveModel = (
    ids: IdEither[]
  ): Promise<EntityMatchingRetrieveModelResponseItem[]> => {
    return this.entityMatchingApi.retrieve(ids);
  };
  /**
   * [Update entity matching models](https://docs.cognite.com/api/playground/#operation/entityMatchingUpdate)
   * ```js
   * await client.context.entityMatchingUpdate({
   *  externalId: 'model123',
   *  update: { description: { set: 'ø' }}
   * });
   * ```
   */
  public entityMatchingUpdate = (
    items: EntityMatchingChange[]
  ): Promise<EntityMatchingModel[]> => {
    return this.entityMatchingApi.update(items);
  };
  /**
   * [Predict matches](https://docs.cognite.com/api/playground/#operation/entityMatchingPredict)
   * ```js
   * await client.context.entityMatchingPredict({
   *  externalId: 'model123',
   *  matchFrom: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],
   *  matchTo: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],
   * });
   * ```
   */
  public entityMatchingPredict = (
    scope: EntityMatchingPredictRequest
  ): Promise<EntityMatchingPredictResponse> => {
    return this.entityMatchingApi.predict(scope);
  };
  /**
   * [Delete entity matcher model](https://docs.cognite.com/api/playground/#operation/entityMatchingPredict)
   * ```js
   * await client.context.entityMatchingDelete({
   *  externalId: 'model123',
   * });
   * ```
   */
  public entityMatchingDelete = (ids: IdEither[]): Promise<{}> => {
    return this.entityMatchingApi.delete(ids);
  };
  /**
   * [Retrieve entity matcher predict result](https://docs.cognite.com/api/playground/#operation/entityMatchingPredictResults)
   * ```js
   * await client.context.entityMatchingRetrievePredictResult(12345678);
   * ```
   */
  public entityMatchingRetrievePredictResult = (
    scope: ContextJobId
  ): Promise<EntityMatchingRetrievePredictResponse> => {
    return this.entityMatchingApi.predictResult(scope);
  };
  /**
   * [Re-fit entity matcher model](https://docs.cognite.com/api/playground/#operation/entityMatchingReFit)
   * ```js
   * await client.context.entityMatchingRefit{
   *  newExternalId: 'newModel123',
   *  matchFrom: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],
   *  matchTo: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],
   *  externalId: 'model123',
   *  trueMatches: [['asset1', 'ts1']]
   * };
   * ```
   */
  public entityMatchingRefit = (
    scope: EntityMatchingRefitRequest
  ): Promise<EntityMatchingRefitResponse> => {
    return this.entityMatchingApi.refit(scope);
  };
  /**
   * [List entity matching models](https://docs.cognite.com/api/playground/#operation/entityMatchingFilter)
   * ```js
   * await client.context.entityMatchingList{
   *   filter: {name: 'model123'},
   * };
   * ```
   */
  public entityMatchingList = (
    scope: EntityMatchingFilterRequest
  ): CursorAndAsyncIterator<EntityMatchingModel> => {
    return this.entityMatchingApi.list(scope);
  };
}
