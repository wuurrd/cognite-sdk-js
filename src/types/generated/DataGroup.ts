export interface DataGroup {
    items: DataGroupItem[];
}

export interface DataGroupItem {
    capabilities?: DataGroupCapability[];
    deletedTime: Date;
    id:            number;
    isDeleted:     boolean;
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

export interface DataGroupCapability {
    groupsAcl?: DataGroupAclGroup;
    assetsAcl?: DataGroupAclAsset;
    eventsAcl?: DataGroupAclEvent;
    filesAcl?: DataGroupAclFile;
    usersAcl?: DataGroupAclUser;
    projectsAcl?: DataGroupAclProject;
    securityCategoriesAcl?: DataGroupAclSecurityCategory;
    rawAcl?: DataGroupAclRaw;
    timeSeriesAcl?: DataGroupAclTimeseries;
    apikeysAcl?: DataGroupAclApikey;
    threedAcl?: DataGroupAclThreed;
    sequencesAcl?: DataGroupAclSequences;
    analyticsAcl?: DataGroupAclAnalytics;
}

export interface DataGroupAclAnalytics {
    actions: DataGroupAnalyticsAction[];
    scope: DataGroupAnalyticsScope;
}

export enum DataGroupAnalyticsAction {
    Execute = "EXECUTE",
    List = "LIST",
    Read = "READ",
}

export interface DataGroupAnalyticsScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclApikey {
    actions: DataGroupApikeysAclAction[];
    scope: DataGroupApikeyScope;
}

export enum DataGroupApikeysAclAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface DataGroupApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface DataGroupAclAsset {
    actions: DataGroupAssetsAclAction[];
    scope: DataGroupAssetScope;
}

export enum DataGroupAssetsAclAction {
    Read = "READ",
    Write = "WRITE",
}

export interface DataGroupAssetScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclEvent {
    actions: DataGroupAssetsAclAction[];
    scope: DataGroupEventScope;
}

export interface DataGroupEventScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclFile {
    actions: DataGroupAssetsAclAction[];
    scope: DataGroupFileScope;
}

export interface DataGroupFileScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclGroup {
    actions: DataGroupGroupAction[];
    scope: DataGroupGroupScope;
}

export enum DataGroupGroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface DataGroupGroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface DataGroupAclProject {
    actions: DataGroupProjectAction[];
    scope: DataGroupProjectScope;
}

export enum DataGroupProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface DataGroupProjectScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclRaw {
    actions: DataGroupRawAction[];
    scope: DataGroupRawScope;
}

export enum DataGroupRawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface DataGroupRawScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclSecurityCategory {
    actions: DataGroupSecurityCategoryAction[];
    scope: DataGroupSecurityCategoryScope;
}

export enum DataGroupSecurityCategoryAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Memberof = "MEMBEROF",
}

export interface DataGroupSecurityCategoryScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclSequences {
    actions: DataGroupAssetsAclAction[];
    scope: DataGroupSequencesScope;
}

export interface DataGroupSequencesScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclThreed {
    actions: DataGroupThreedAction[];
    scope: DataGroupThreedScope;
}

export enum DataGroupThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface DataGroupThreedScope {
    all?: { [key: string]: any };
}

export interface DataGroupAclTimeseries {
    actions: DataGroupAssetsAclAction[];
    scope: DataGroupTimeseriesScope;
}

export interface DataGroupTimeseriesScope {
    all?:          { [key: string]: any };
    assetIdScope?: DataGroupScopeAssetIdScope;
    idscope?: DataGroupScopeTimeSeriesIdScope;
}

export interface DataGroupScopeAssetIdScope {
    subtreeIds?: string[];
}

export interface DataGroupScopeTimeSeriesIdScope {
    ids?: string[];
}

export interface DataGroupAclUser {
    actions: DataGroupApikeysAclAction[];
    scope: DataGroupUserScope;
}

export interface DataGroupUserScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
