// Copyright 2020 Cognite AS

import {
  BaseResourceAPI,
  CursorAndAsyncIterator,
  IdEither,
} from '@cognite/sdk-core';
import {
  EntityMatchingFitRequest,
  EntityMatchingFitResponse,
  EntityMatchingRefitRequest,
  EntityMatchingRefitResponse,
  EntityMatchingChange,
  EntityMatchingPredictRequest,
  EntityMatchingPredictResponse,
  ContextJobId,
  EntityMatchingRetrievePredictResponse,
  EntityMatchingRetrieveModelResponseItem,
  EntityMatchingModel,
  EntityMatchingFilterRequest,
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
    changes: EntityMatchingChange[]
  ): Promise<EntityMatchingModel[]> => {
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
  public retrieveModel = (
    ids: IdEither[]
  ): Promise<EntityMatchingRetrieveModelResponseItem[]> => {
    return super.retrieveEndpoint(ids);
  };
  public retrievePredictResult = async (
    jobId: ContextJobId
  ): Promise<EntityMatchingRetrievePredictResponse> => {
    const path = this.url(`jobs/${jobId}`);
    const response = await this.get<EntityMatchingRetrievePredictResponse>(
      path
    );
    return this.addToMapAndReturn(response.data, response);
  };
  public refit = async (
    scope: EntityMatchingRefitRequest
  ): Promise<EntityMatchingRefitResponse> => {
    const path = this.url('refit');
    const response = await this.post<EntityMatchingRefitResponse>(path, {
      data: scope,
    });
    return this.addToMapAndReturn(response.data, response);
  };
  public list = (
    scope?: EntityMatchingFilterRequest
  ): CursorAndAsyncIterator<EntityMatchingModel> => {
    return super.listEndpoint(this.callListEndpointWithPost, scope);
  };
}
