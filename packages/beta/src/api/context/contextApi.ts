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
   *
   * ```js
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
