export interface CognitetimeseriesACLACL {
    actions: TimeseriesAction[];
    scope:   TimeseriesScope;
}

export enum TimeseriesAction {
    Read = "READ",
    Write = "WRITE",
}

export interface TimeseriesScope {
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
