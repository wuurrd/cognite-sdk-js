/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitetimeseriesACLACL {
  actions: TimeseriesAction[];
  scope: CognitetimeseriesAclAclTimeseriesScope;
}

export enum TimeseriesAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CognitetimeseriesAclAclTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: CognitetimeseriesAclAclScopeAssetIDScope;
  idscope?: CognitetimeseriesAclAclScopeTimeSeriesIDScope;
}

export interface CognitetimeseriesAclAclScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface CognitetimeseriesAclAclScopeTimeSeriesIDScope {
  ids?: string[];
}
