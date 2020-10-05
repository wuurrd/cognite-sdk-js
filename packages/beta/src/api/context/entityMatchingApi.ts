// Copyright 2020 Cognite AS

import { BaseResourceAPI, IdEither } from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  EntityMatchingUpdateRequestItems,
  EntityMatchingUpdateResponseObject,
  EntityMatchingPredictRequest,
  EntityMatchingPredictResponse,
  ContextJobId,
  EntityMatchingRetrieveResponse,
} from '../../types';

export class EntityMatchingApi extends BaseResourceAPI<any> {
  public fit = async (
    scope: EntityMatchingFitRequest
  ): Promise<EntityMatchingFitResponse> => {
    const path = this.url('fit');
    const response = await this.post<EntityMatchingFitResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
  public update = (
    changes: EntityMatchingUpdateRequestItems[]
  ): Promise<EntityMatchingUpdateResponseObject[]> => {
    return super.updateEndpoint(changes);
  };
  public delete = async (ids: IdEither[]): Promise<{}> => {
    return super.deleteEndpoint(ids);
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
  // public list = (
  //   scope?: TimeseriesFilterQuery
  // ): CursorAndAsyncIterator<Timeseries> => {
  //   return super.listEndpoint(this.callListEndpointWithPost, scope);
  // };
  // public retrieve = (
  //   ids: IdEither[],
  // ) => {
  //   return super.retrieveEndpoint(ids);
  // };
  public retrieve = async (
    jobId: ContextJobId
  ): Promise<EntityMatchingRetrieveResponse> => {
    const path = this.url(`jobs/${jobId}`);
    const response = await this.get<EntityMatchingRetrieveResponse>(path);
    return this.addToMapAndReturn(response.data, response);
  };
}
