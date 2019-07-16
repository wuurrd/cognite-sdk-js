/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitetimeseriesACLScope {
  all?: { [key: string]: any };
  assetIdScope?: CognitetimeseriesAclScopeScopeAssetIDScope;
  idscope?: CognitetimeseriesAclScopeScopeTimeSeriesIDScope;
}

export interface CognitetimeseriesAclScopeScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface CognitetimeseriesAclScopeScopeTimeSeriesIDScope {
  ids?: string[];
}
