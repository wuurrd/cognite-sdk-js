/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitetimeseriesAclAcl {
  actions: TimeseriesAction[];
  scope: CognitetimeseriesAclAclTimeseriesScope;
}

export enum TimeseriesAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CognitetimeseriesAclAclTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: CognitetimeseriesAclAclScopeAssetIdScope;
  idscope?: CognitetimeseriesAclAclScopeTimeSeriesIdScope;
}

export interface CognitetimeseriesAclAclScopeAssetIdScope {
  subtreeIds?: string[];
}

export interface CognitetimeseriesAclAclScopeTimeSeriesIdScope {
  ids?: string[];
}
