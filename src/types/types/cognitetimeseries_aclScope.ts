export interface CognitetimeseriesACLScope {
    all?:          { [key: string]: any };
    assetIdScope?: ScopeAssetIDScope;
    idscope?:      ScopeTimeSeriesIDScope;
}

export interface ScopeAssetIDScope {
    subtreeIds?: string[];
}

export interface ScopeTimeSeriesIDScope {
    ids?: string[];
}
