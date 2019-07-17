export interface CogniteCapability {
    groupsAcl?: CogniteCapabilityAclGroup;
    assetsAcl?: CogniteCapabilityAclAsset;
    eventsAcl?: CogniteCapabilityAclEvent;
    filesAcl?: CogniteCapabilityAclFile;
    usersAcl?: CogniteCapabilityAclUser;
    projectsAcl?: CogniteCapabilityAclProject;
    securityCategoriesAcl?: CogniteCapabilityAclSecurityCategory;
    rawAcl?: CogniteCapabilityAclRaw;
    timeSeriesAcl?: CogniteCapabilityAclTimeseries;
    apikeysAcl?: CogniteCapabilityAclApikey;
    threedAcl?: CogniteCapabilityAclThreed;
    sequencesAcl?: CogniteCapabilityAclSequences;
    analyticsAcl?: CogniteCapabilityAclAnalytics;
}

export interface CogniteCapabilityAclAnalytics {
    actions: CogniteCapabilityAnalyticsAction[];
    scope: CogniteCapabilityAnalyticsScope;
}

export enum CogniteCapabilityAnalyticsAction {
    Execute = "EXECUTE",
    List = "LIST",
    Read = "READ",
}

export interface CogniteCapabilityAnalyticsScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclApikey {
    actions: CogniteCapabilityApikeysAclAction[];
    scope: CogniteCapabilityApikeyScope;
}

export enum CogniteCapabilityApikeysAclAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface CogniteCapabilityApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface CogniteCapabilityAclAsset {
    actions: CogniteCapabilityAssetsAclAction[];
    scope: CogniteCapabilityAssetScope;
}

export enum CogniteCapabilityAssetsAclAction {
    Read = "READ",
    Write = "WRITE",
}

export interface CogniteCapabilityAssetScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclEvent {
    actions: CogniteCapabilityAssetsAclAction[];
    scope: CogniteCapabilityEventScope;
}

export interface CogniteCapabilityEventScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclFile {
    actions: CogniteCapabilityAssetsAclAction[];
    scope: CogniteCapabilityFileScope;
}

export interface CogniteCapabilityFileScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclGroup {
    actions: CogniteCapabilityGroupAction[];
    scope: CogniteCapabilityGroupScope;
}

export enum CogniteCapabilityGroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface CogniteCapabilityGroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface CogniteCapabilityAclProject {
    actions: CogniteCapabilityProjectAction[];
    scope: CogniteCapabilityProjectScope;
}

export enum CogniteCapabilityProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface CogniteCapabilityProjectScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclRaw {
    actions: CogniteCapabilityRawAction[];
    scope: CogniteCapabilityRawScope;
}

export enum CogniteCapabilityRawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface CogniteCapabilityRawScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclSecurityCategory {
    actions: CogniteCapabilitySecurityCategoryAction[];
    scope: CogniteCapabilitySecurityCategoryScope;
}

export enum CogniteCapabilitySecurityCategoryAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Memberof = "MEMBEROF",
}

export interface CogniteCapabilitySecurityCategoryScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclSequences {
    actions: CogniteCapabilityAssetsAclAction[];
    scope: CogniteCapabilitySequencesScope;
}

export interface CogniteCapabilitySequencesScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclThreed {
    actions: CogniteCapabilityThreedAction[];
    scope: CogniteCapabilityThreedScope;
}

export enum CogniteCapabilityThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface CogniteCapabilityThreedScope {
    all?: { [key: string]: any };
}

export interface CogniteCapabilityAclTimeseries {
    actions: CogniteCapabilityAssetsAclAction[];
    scope: CogniteCapabilityTimeseriesScope;
}

export interface CogniteCapabilityTimeseriesScope {
    all?:          { [key: string]: any };
    assetIdScope?: CogniteCapabilityScopeAssetIdScope;
    idscope?: CogniteCapabilityScopeTimeSeriesIdScope;
}

export interface CogniteCapabilityScopeAssetIdScope {
    subtreeIds?: string[];
}

export interface CogniteCapabilityScopeTimeSeriesIdScope {
    ids?: string[];
}

export interface CogniteCapabilityAclUser {
    actions: CogniteCapabilityApikeysAclAction[];
    scope: CogniteCapabilityUserScope;
}

export interface CogniteCapabilityUserScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
