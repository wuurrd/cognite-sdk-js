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
   *  idField: 'id'
   * });
   * ```
   */
  public entityMatchingFit = (
    scope: EntityMatchingFitRequest
  ): Promise<EntityMatchingFitResponse> => {
    return this.entityMatchingApi.fit(scope);
  };

  /**
   *
   * ```js
   * ```
   */
  public entityMatchingRetrieveModel = (
    ids: IdEither[]
  ): Promise<EntityMatchingRetrieveModelResponseItem[]> => {
    return this.entityMatchingApi.retrieveModel(ids);
  };

  /**
   *
   * ```js
   * ```
   */
  public entityMatchingUpdate = (
    items: EntityMatchingChange[]
  ): Promise<EntityMatchingModel[]> => {
    return this.entityMatchingApi.update(items);
  };

  /**
   *
   * ```js
   * ```
   */
  public entityMatchingPredict = (
    scope: EntityMatchingPredictRequest
  ): Promise<EntityMatchingPredictResponse> => {
    return this.entityMatchingApi.predict(scope);
  };
  /**
   *
   * ```js
   * ```
   */
  public entityMatchingDelete = (ids: IdEither[]): Promise<{}> => {
    return this.entityMatchingApi.delete(ids);
  };
  /**
   *
   * ```js
   * ```
   */
  public entityMatchingRetrievePredictResult = (
    scope: ContextJobId
  ): Promise<EntityMatchingRetrievePredictResponse> => {
    return this.entityMatchingApi.retrievePredictResult(scope);
  };

  public entityMatchingRefit = (
    scope: EntityMatchingRefitRequest
  ): Promise<EntityMatchingRefitResponse> => {
    return this.entityMatchingApi.refit(scope);
  };

  public entityMatchingList = (
    scope: EntityMatchingFilterRequest
  ): CursorAndAsyncIterator<EntityMatchingModel> => {
    return this.entityMatchingApi.list(scope);
  };
}
