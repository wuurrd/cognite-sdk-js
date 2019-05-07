// Copyright 2019 Cognite AS

import { AxiosInstance } from 'axios';
import { makeAutoPaginationMethods } from './autoPagination';
import { rawRequest } from './axiosWrappers';
import { MetadataMap } from './metadata';
import { CursorResponse, ItemsResponse } from './types/types';

type CreateEndpoint<RequestType, ResponseType> = (
  items: RequestType[]
) => Promise<ResponseType[]>;

export function generateCreateEndpoint<RequestType, ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap
): CreateEndpoint<RequestType, ResponseType> {
  return async function create(items) {
    type Response = ItemsResponse<ResponseType>;
    const response = await rawRequest<Response>(axiosInstance, {
      method: 'post',
      url: resourcePath,
      data: { items },
    });
    return metadataMap.addAndReturn(response.data.data.items, response);
  };
}

export function listByGet<RequestFilter, ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  filter: RequestFilter
) {
  return rawRequest<CursorResponse<ResponseType>>(axiosInstance, {
    method: 'get',
    url: resourcePath,
    params: filter,
  });
}

export function listByPost<RequestFilter, ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  filter: RequestFilter
) {
  return rawRequest<CursorResponse<ResponseType>>(axiosInstance, {
    method: 'post',
    url: `${resourcePath}/list`,
    data: filter,
  });
}

export function generateListEndpoint<
  RequestFilter extends object,
  ResponseType
>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap,
  withPost: boolean
) {
  function addNextPageFunction<T>(
    dataWithCursor: CursorResponse<T>,
    params: RequestFilter
  ) {
    const { nextCursor } = dataWithCursor;
    const next = nextCursor
      ? () => list(Object.assign({}, params, { cursor: nextCursor }))
      : undefined;
    Object.assign(dataWithCursor, { next });
  }

  async function list(filter: RequestFilter) {
    const response = await (withPost
      ? listByPost<RequestFilter, ResponseType>(
          axiosInstance,
          resourcePath,
          filter
        )
      : listByGet<RequestFilter, ResponseType>(
          axiosInstance,
          resourcePath,
          filter
        ));
    addNextPageFunction(response.data.data, filter);
    return metadataMap.addAndReturn(response.data.data, response);
  }

  return (params: RequestFilter = {} as RequestFilter) => {
    const listPromise = list(params);
    return makeAutoPaginationMethods(listPromise);
  };
}

export function generateRetrieveEndpoint<IdType, ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap
) {
  return async function retrieve(ids: IdType[]): Promise<ResponseType[]> {
    const response = await rawRequest<ItemsResponse<ResponseType>>(
      axiosInstance,
      {
        method: 'post',
        url: `${resourcePath}/byids`,
        data: { items: ids },
      }
    );
    return metadataMap.addAndReturn(response.data.data.items, response);
  };
}

export function generateRetrieveMultipleEndpoint<ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap
) {
  return async function retrieveMultiple(
    ids: number[]
  ): Promise<ResponseType[]> {
    const response = await rawRequest<ItemsResponse<ResponseType>>(
      axiosInstance,
      {
        url: `${resourcePath}/byids`,
        method: 'post',
        data: { items: ids },
      }
    );
    return metadataMap.addAndReturn(response.data.data.items, response);
  };
}

export function generateDeleteEndpoint<IdType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap
) {
  return async function remove(ids: IdType[]): Promise<{}> {
    const response = await rawRequest<{}>(axiosInstance, {
      url: `${resourcePath}/delete`,
      method: 'post',
      data: { items: ids },
    });
    return metadataMap.addAndReturn({}, response);
  };
}

export function generateUpdateEndpoint<RequestType, ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap
) {
  return async function update(
    changes: RequestType[]
  ): Promise<ResponseType[]> {
    type Response = ItemsResponse<ResponseType>;
    const response = await rawRequest<Response>(axiosInstance, {
      url: `${resourcePath}/update`,
      method: 'post',
      data: { items: changes },
    });
    return metadataMap.addAndReturn(response.data.data.items, response);
  };
}

export function generateSearchEndpoint<RequestParams, ResponseType>(
  axiosInstance: AxiosInstance,
  resourcePath: string,
  metadataMap: MetadataMap
) {
  return async function search(query: RequestParams): Promise<ResponseType[]> {
    const response = await rawRequest<ItemsResponse<ResponseType>>(
      axiosInstance,
      {
        method: 'post',
        url: `${resourcePath}/search`,
        data: query,
      }
    );
    return metadataMap.addAndReturn(response.data.data.items, response);
  };
}