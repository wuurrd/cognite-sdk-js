// Copyright 2019 Cognite AS

import { AxiosInstance } from 'axios';
import { CogniteAsyncIterator } from '../../autoPagination';
import { MetadataMap } from '../../metadata';
// import { CogniteMultiError } from '../../multiError';
import {
  generateCreateEndpoint,
  generateDeleteEndpoint,
  generateListEndpoint,
  generateRetrieveEndpoint,
  generateSearchEndpoint,
  generateUpdateEndpoint,
} from '../../standardMethods';
import {
  Asset,
  AssetChange,
  AssetIdEither,
  AssetListScope,
  AssetSearchFilter,
  // CogniteInternalId,
  ExternalAssetItem,
  // ExternalId,
  // IdEither,
  // InternalId,
} from '../../types/types';
import { projectUrl } from '../../utils';
import { assetChunker, filterMissingIdsFromErrorResponse } from './assetUtils';

export class AssetsAPI {
  /**
   * [Creates new assets](https://doc.cognitedata.com/api/v1/#operation/createAssets)
   *
   * ```js
   * const assets = [
   *   { name: 'First asset' },
   *   { name: 'Second asset', description: 'Child asset' },
   * ];
   * const createdAssets = await client.assets.create(assets);
   * ```
   */
  public create: AssetCreateEndpoint;

  /**
   * [List assets](https://doc.cognitedata.com/api/v1/#operation/listAssets)
   * <!-- or [similar](https://doc.cognitedata.com/api/v1/#operation/getAssets) -->
   *
   * ```js
   * const assets = await client.assets.list({ filter: { name: '21PT1019' } });
   * ```
   */
  public list: AssetListEndpoint;

  /**
   * [Retrieve assets](https://doc.cognitedata.com/api/v1/#operation/byIdsAssets)
   * <!-- or [similar](https://doc.cognitedata.com/api/v1/#operation/getAsset) -->
   *
   * ```js
   * const assets = await client.assets.retrieve([{id: 123}, {externalId: 'abc'}]);
   * ```
   */
  public retrieve: AssetRetrieveEndpoint;

  /**
   * [Update assets](https://doc.cognitedata.com/api/v1/#operation/updateAssets)
   *
   * ```js
   * const assets = await client.assets.update([{id: 123, update: {name: {set: 'New name'}}}]);
   * ```
   */
  public update: AssetUpdateEndpoint;

  /**
   * [Search for assets](https://doc.cognitedata.com/api/v1/#operation/searchAssets)
   *
   * ```js
   * const assets = await client.assets.search([{
   *   filter: {
   *     parentIds: [1, 2]
   *   },
   *   search: {
   *     name: '21PT1019'
   *   }
   * }]);
   * ```
   */
  public search: AssetSearchEndpoint;

  /**
   * [Delete assets](https://doc.cognitedata.com/api/v1/#operation/deleteAssets)
   *
   * ```js
   * await client.assets.delete([{id: 123}, {externalId: 'abc'}]);
   * ```
   */
  private deleteEndpoint: AssetDeleteEndpoint;

  /** @hidden */
  constructor(project: string, instance: AxiosInstance, map: MetadataMap) {
    const path = projectUrl(project) + '/assets';
    this.create = generateCreateEndpoint(instance, path, map, assetChunker);
    this.list = generateListEndpoint(instance, path, map, true);
    this.retrieve = generateRetrieveEndpoint(instance, path, map);
    this.update = generateUpdateEndpoint(instance, path, map);
    this.search = generateSearchEndpoint(instance, path, map);
    this.deleteEndpoint = generateDeleteEndpoint(instance, path, map);
  }

  public delete: AssetDeleteEndpoint = async ids => {
    let idsToRetry = [...ids];
    let response = {};
    do {
      try {
        response = await this.deleteEndpoint(ids);
        idsToRetry = [];
      } catch (err) {
        idsToRetry = filterMissingIdsFromErrorResponse(err);
      }
    } while (idsToRetry.length !== 0);
    return response;
  };
}

// function extractIdFromIdEither(obj: IdEither) {
//   if ((obj as ExternalId).externalId) {
//     return (obj as ExternalId).externalId;
//   }
//   return (obj as InternalId).id;
// }

// function silentlyDeleteAssets(
//   endpoint: AssetDeleteEndpoint
// ): AssetDeleteEndpoint {
//   return async items => {
//     let currentIdSet = [...items];
//     let error;
//     const responses = [];
//     do {
//       error = null;
//       try {
//         const response = await endpoint(currentIdSet);
//         responses.push(response);
//       } catch (err) {
//         error = err;
//         if (!(err instanceof CogniteMultiError)) {
//           throw err;
//         }
//         // check if we have encountered the non-existing ID request case
//         const hasMissingIds = err.missing && err.missing.length > 0;
//         const hasCorrectStatusCode = err.status === 400;
//         const noDuplicates = !err.duplicated || err.duplicated.length === 0;
//         if (!(hasCorrectStatusCode && hasMissingIds && noDuplicates)) {
//           throw err;
//         }

//         const missingIds = new Set<CogniteInternalId | string>();
//         err.missing!.map(extractIdFromIdEither).forEach(missingIds.add);

//         currentIdSet = currentIdSet.filter(
//           missingItem => !missingIds.has(extractIdFromIdEither(missingItem))
//         );
//       }
//     } while (error);
//     return responses;
//   };
// }

export type AssetCreateEndpoint = (
  items: ExternalAssetItem[]
) => Promise<Asset[]>;

export type AssetListEndpoint = (
  scope?: AssetListScope
) => CogniteAsyncIterator<Asset>;

export type AssetRetrieveEndpoint = (ids: AssetIdEither[]) => Promise<Asset[]>;

export type AssetUpdateEndpoint = (changes: AssetChange[]) => Promise<Asset[]>;

export type AssetSearchEndpoint = (
  query: AssetSearchFilter
) => Promise<Asset[]>;

export type AssetDeleteEndpoint = (ids: AssetIdEither[]) => Promise<{}>;
