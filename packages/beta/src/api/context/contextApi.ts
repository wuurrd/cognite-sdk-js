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
  ContextJobId,
  EntityMatchingRetrievePredictResponse,
  EntityMatchingRetrieveModelResponseItem,
  EntityMatchingFilterRequest,
  EntityMatchingModel,
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

  public entityMatchingList = (
    scope: EntityMatchingFilterRequest
  ): CursorAndAsyncIterator<EntityMatchingModel> => {
    return this.entityMatchingApi.list(scope);
  };
}
