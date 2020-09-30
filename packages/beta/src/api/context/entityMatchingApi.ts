// Copyright 2020 Cognite AS

import { BaseResourceAPI } from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  EntityMatchingUpdateRequest,
  EntityMatchingUpdateResponse,
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
    const path = this.url('update');
    const response = await this.post<EntityMatchingUpdateResponse>(path, {
      data: scope,
    });
  };
}
