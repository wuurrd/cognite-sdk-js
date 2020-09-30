// Copyright 2020 Cognite AS

import { BaseResourceAPI, CDFHttpClient, MetadataMap } from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
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
}
