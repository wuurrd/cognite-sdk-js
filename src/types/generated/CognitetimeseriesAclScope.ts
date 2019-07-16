/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitetimeseriesAclScope {
  all?: { [key: string]: any };
  assetIdScope?: CognitetimeseriesAclScopeScopeAssetIdScope;
  idscope?: CognitetimeseriesAclScopeScopeTimeSeriesIdScope;
}

export interface CognitetimeseriesAclScopeScopeAssetIdScope {
  subtreeIds?: string[];
}

export interface CognitetimeseriesAclScopeScopeTimeSeriesIdScope {
  ids?: string[];
}
