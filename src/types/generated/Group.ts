export interface Group {
    capabilities?: GroupCapability[];
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

export interface GroupCapability {
    groupsAcl?: GroupAclGroup;
    assetsAcl?: GroupAclAsset;
    eventsAcl?: GroupAclEvent;
    filesAcl?: GroupAclFile;
    usersAcl?: GroupAclUser;
    projectsAcl?: GroupAclProject;
    securityCategoriesAcl?: GroupAclSecurityCategory;
    rawAcl?: GroupAclRaw;
    timeSeriesAcl?: GroupAclTimeseries;
    apikeysAcl?: GroupAclApikey;
    threedAcl?: GroupAclThreed;
    sequencesAcl?: GroupAclSequences;
    analyticsAcl?: GroupAclAnalytics;
}

export interface GroupAclAnalytics {
    actions: GroupAnalyticsAction[];
    scope: GroupAnalyticsScope;
}

export enum GroupAnalyticsAction {
    Execute = "EXECUTE",
    List = "LIST",
    Read = "READ",
}

export interface GroupAnalyticsScope {
    all?: { [key: string]: any };
}

export interface GroupAclApikey {
    actions: GroupApikeysAclAction[];
    scope: GroupApikeyScope;
}

export enum GroupApikeysAclAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface GroupApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface GroupAclAsset {
    actions: GroupAssetsAclAction[];
    scope: GroupAssetScope;
}

export enum GroupAssetsAclAction {
    Read = "READ",
    Write = "WRITE",
}

export interface GroupAssetScope {
    all?: { [key: string]: any };
}

export interface GroupAclEvent {
    actions: GroupAssetsAclAction[];
    scope: GroupEventScope;
}

export interface GroupEventScope {
    all?: { [key: string]: any };
}

export interface GroupAclFile {
    actions: GroupAssetsAclAction[];
    scope: GroupFileScope;
}

export interface GroupFileScope {
    all?: { [key: string]: any };
}

export interface GroupAclGroup {
    actions: GroupGroupAction[];
    scope: GroupGroupScope;
}

export enum GroupGroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface GroupGroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface GroupAclProject {
    actions: GroupProjectAction[];
    scope: GroupProjectScope;
}

export enum GroupProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface GroupProjectScope {
    all?: { [key: string]: any };
}

export interface GroupAclRaw {
    actions: GroupRawAction[];
    scope: GroupRawScope;
}

export enum GroupRawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface GroupRawScope {
    all?: { [key: string]: any };
}

export interface GroupAclSecurityCategory {
    actions: GroupSecurityCategoryAction[];
    scope: GroupSecurityCategoryScope;
}

export enum GroupSecurityCategoryAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Memberof = "MEMBEROF",
}

export interface GroupSecurityCategoryScope {
    all?: { [key: string]: any };
}

export interface GroupAclSequences {
    actions: GroupAssetsAclAction[];
    scope: GroupSequencesScope;
}

export interface GroupSequencesScope {
    all?: { [key: string]: any };
}

export interface GroupAclThreed {
    actions: GroupThreedAction[];
    scope: GroupThreedScope;
}

export enum GroupThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface GroupThreedScope {
    all?: { [key: string]: any };
}

export interface GroupAclTimeseries {
    actions: GroupAssetsAclAction[];
    scope: GroupTimeseriesScope;
}

export interface GroupTimeseriesScope {
    all?:          { [key: string]: any };
    assetIdScope?: GroupScopeAssetIdScope;
    idscope?: GroupScopeTimeSeriesIdScope;
}

export interface GroupScopeAssetIdScope {
    subtreeIds?: string[];
}

export interface GroupScopeTimeSeriesIdScope {
    ids?: string[];
}

export interface GroupAclUser {
    actions: GroupApikeysAclAction[];
    scope: GroupUserScope;
}

export interface GroupUserScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
