// Copyright 2020 Cognite AS

import { BaseResourceAPI } from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  EntityMatchingUpdateRequest,
  EntityMatchingUpdateResponse,
  EntityMatchingDeleteRequest,
  EntityMatchingDeleteResponse,
  EntityMatchingPredictRequest,
  EntityMatchingPredictResponse,
} from '../../types';

export class EntityMatchingApi extends BaseResourceAPI<unknown> {
  public fit = async (
    scope: EntityMatchingFitRequest
  ): Promise<EntityMatchingFitResponse> => {
    const path = this.url('fit');
    const response = await this.post<EntityMatchingFitResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
  public update = async (
    scope: EntityMatchingUpdateRequest
  ): Promise<EntityMatchingUpdateResponse> => {
    const path = this.updateUrl;
    const response = await this.post<EntityMatchingUpdateResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
  public delete = async (
    scope: EntityMatchingDeleteRequest
  ): Promise<EntityMatchingDeleteResponse> => {
    const path = this.deleteUrl;
    const response = await this.post<EntityMatchingDeleteResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
  public predict = async (
    scope: EntityMatchingPredictRequest
  ): Promise<EntityMatchingPredictResponse> => {
    const path = this.url('predict');
    const response = await this.post<EntityMatchingPredictResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
}
