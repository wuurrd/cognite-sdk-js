// Copyright 2020 Cognite AS

import { BaseResourceAPI, CDFHttpClient, MetadataMap } from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  ContextJobId,
  EntityMatchingRetrievePredictResponse,
  EntityMatchingRetrieveModelRequest,
  EntityMatchingRetrieveModelResponse,
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
    const path = resourcePath + '/entitymatching';
    this.entityMatchingApi = new EntityMatchingApi(path, httpClient, map);
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
    scope: EntityMatchingRetrieveModelRequest
  ): Promise<EntityMatchingRetrieveModelResponse> => {
    return this.entityMatchingApi.retrieveModel(scope);
  };

  /**
   *
   * ```js
   * ```
   */
  public entityMatchingRetrievePredict = (
    scope: ContextJobId
  ): Promise<EntityMatchingRetrievePredictResponse> => {
    return this.entityMatchingApi.retrievePredict(scope);
  };
}
