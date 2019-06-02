// Copyright 2019 Cognite AS

import { AxiosInstance } from 'axios';
import { MetadataMap } from '../metadata';

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
export type AssetCreateEndpoint = (items: types.ExternalAssetItem[]) => Promise<AssetList>;

export class AssetsAPI {
  private project: string;
  private instance: AxiosInstance;
  private map: MetadataMap;
  private listEndpoint: 

  constructor(project: string, instance: AxiosInstance, map: MetadataMap) {
    this.project = project;
    this.instance = instance;
    this.map = map;
  }

  list: generateListEndpoint(instance, path, map, true),
    retrieve: generateRetrieveEndpoint(instance, path, map),
    update: generateUpdateEndpoint(instance, path, map),
    search: generateSearchEndpoint(instance, path, map),
    delete: generateDeleteEndpoint(instance, path, map),
}
