export interface DataGroupSpec {
    items: DataGroupSpecItem[];
}

/**
 * A specification for creating a new group
 */
export interface DataGroupSpecItem {
    capabilities?: DataGroupSpecCapability[];
    /**
     * Name of the group
     */
    name: string;
    /**
     * ID of the group in the source. If this is the same ID as a group in the IDP, a user in
     * that group will implicitly be a part of this group as well.
     */
    sourceId?: string;
}

export interface DataGroupSpecCapability {
    groupsAcl?: DataGroupSpecAclGroup;
    assetsAcl?: DataGroupSpecAclAsset;
    eventsAcl?: DataGroupSpecAclEvent;
    filesAcl?: DataGroupSpecAclFile;
    usersAcl?: DataGroupSpecAclUser;
    projectsAcl?: DataGroupSpecAclProject;
    securityCategoriesAcl?: DataGroupSpecAclSecurityCategory;
    rawAcl?: DataGroupSpecAclRaw;
    timeSeriesAcl?: DataGroupSpecAclTimeseries;
    apikeysAcl?: DataGroupSpecAclApikey;
    threedAcl?: DataGroupSpecAclThreed;
    sequencesAcl?: DataGroupSpecAclSequences;
    analyticsAcl?: DataGroupSpecAclAnalytics;
}

export interface DataGroupSpecAclAnalytics {
    actions: DataGroupSpecAnalyticsAction[];
    scope: DataGroupSpecAnalyticsScope;
}

export enum DataGroupSpecAnalyticsAction {
    Execute = "EXECUTE",
    List = "LIST",
    Read = "READ",
}

export interface DataGroupSpecAnalyticsScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclApikey {
    actions: DataGroupSpecApikeysAclAction[];
    scope: DataGroupSpecApikeyScope;
}

export enum DataGroupSpecApikeysAclAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface DataGroupSpecApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface DataGroupSpecAclAsset {
    actions: DataGroupSpecAssetsAclAction[];
    scope: DataGroupSpecAssetScope;
}

export enum DataGroupSpecAssetsAclAction {
    Read = "READ",
    Write = "WRITE",
}

export interface DataGroupSpecAssetScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclEvent {
    actions: DataGroupSpecAssetsAclAction[];
    scope: DataGroupSpecEventScope;
}

export interface DataGroupSpecEventScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclFile {
    actions: DataGroupSpecAssetsAclAction[];
    scope: DataGroupSpecFileScope;
}

export interface DataGroupSpecFileScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclGroup {
    actions: DataGroupSpecGroupAction[];
    scope: DataGroupSpecGroupScope;
}

export enum DataGroupSpecGroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface DataGroupSpecGroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface DataGroupSpecAclProject {
    actions: DataGroupSpecProjectAction[];
    scope: DataGroupSpecProjectScope;
}

export enum DataGroupSpecProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface DataGroupSpecProjectScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclRaw {
    actions: DataGroupSpecRawAction[];
    scope: DataGroupSpecRawScope;
}

export enum DataGroupSpecRawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface DataGroupSpecRawScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclSecurityCategory {
    actions: DataGroupSpecSecurityCategoryAction[];
    scope: DataGroupSpecSecurityCategoryScope;
}

export enum DataGroupSpecSecurityCategoryAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Memberof = "MEMBEROF",
}

export interface DataGroupSpecSecurityCategoryScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclSequences {
    actions: DataGroupSpecAssetsAclAction[];
    scope: DataGroupSpecSequencesScope;
}

export interface DataGroupSpecSequencesScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclThreed {
    actions: DataGroupSpecThreedAction[];
    scope: DataGroupSpecThreedScope;
}

export enum DataGroupSpecThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface DataGroupSpecThreedScope {
    all?: { [key: string]: any };
}

export interface DataGroupSpecAclTimeseries {
    actions: DataGroupSpecAssetsAclAction[];
    scope: DataGroupSpecTimeseriesScope;
}

export interface DataGroupSpecTimeseriesScope {
    all?:          { [key: string]: any };
    assetIdScope?: DataGroupSpecScopeAssetIdScope;
    idscope?: DataGroupSpecScopeTimeSeriesIdScope;
}

export interface DataGroupSpecScopeAssetIdScope {
    subtreeIds?: string[];
}

export interface DataGroupSpecScopeTimeSeriesIdScope {
    ids?: string[];
}

export interface DataGroupSpecAclUser {
    actions: DataGroupSpecApikeysAclAction[];
    scope: DataGroupSpecUserScope;
}

export interface DataGroupSpecUserScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
