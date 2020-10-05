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
  EntityMatchingRetrievePredictResponse,
  EntityMatchingRetrieveModelRequest,
  EntityMatchingRetrieveModelResponse,
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
  public retrieveModel = async (
    scope: EntityMatchingRetrieveModelRequest
  ): Promise<EntityMatchingRetrieveModelResponse> => {
    const path = this.url('byids');
    const response = await this.post<EntityMatchingRetrieveModelResponse>(
      path,
      {
        data: scope,
      }
    );
    return this.addToMapAndReturn(response.data, response);
  };

  public retrievePredict = async (
    jobId: ContextJobId
  ): Promise<EntityMatchingRetrievePredictResponse> => {
    const path = this.url(`jobs/${jobId}`);
    const response = await this.get<EntityMatchingRetrievePredictResponse>(
      path
    );
    return this.addToMapAndReturn(response.data, response);
  };
}
