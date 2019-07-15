export interface GroupResponse {
    items: Item[];
}

export interface Item {
    capabilities?: Capability[];
    deletedTime?:  number;
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

export interface Capability {
    groupsAcl?:             ACLGroup;
    assetsAcl?:             ACLAsset;
    eventsAcl?:             ACLEvent;
    filesAcl?:              ACLFile;
    usersAcl?:              ACLUser;
    projectsAcl?:           ACLProject;
    securityCategoriesAcl?: ACLSecurityCategory;
    rawAcl?:                ACLRaw;
    timeSeriesAcl?:         ACLTimeseries;
    apikeysAcl?:            ACLApikey;
    threedAcl?:             ACLThreed;
    sequencesAcl?:          ACLSequences;
    analyticsAcl?:          ACLAnalytics;
}

export interface ACLAnalytics {
    actions: AnalyticsAction[];
    scope:   AnalyticsScope;
}

export enum AnalyticsAction {
    Execute = "EXECUTE",
    List = "LIST",
    Read = "READ",
}

export interface AnalyticsScope {
    all?: { [key: string]: any };
}

export interface ACLApikey {
    actions: ApikeysACLAction[];
    scope:   ApikeyScope;
}

export enum ApikeysACLAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface ApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface ACLAsset {
    actions: AssetsACLAction[];
    scope:   AssetScope;
}

export enum AssetsACLAction {
    Read = "READ",
    Write = "WRITE",
}

export interface AssetScope {
    all?: { [key: string]: any };
}

export interface ACLEvent {
    actions: AssetsACLAction[];
    scope:   EventScope;
}

export interface EventScope {
    all?: { [key: string]: any };
}

export interface ACLFile {
    actions: AssetsACLAction[];
    scope:   FileScope;
}

export interface FileScope {
    all?: { [key: string]: any };
}

export interface ACLGroup {
    actions: GroupAction[];
    scope:   GroupScope;
}

export enum GroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface GroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}

export interface ACLProject {
    actions: ProjectAction[];
    scope:   ProjectScope;
}

export enum ProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface ProjectScope {
    all?: { [key: string]: any };
}

export interface ACLRaw {
    actions: RawAction[];
    scope:   RawScope;
}

export enum RawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface RawScope {
    all?: { [key: string]: any };
}

export interface ACLSecurityCategory {
    actions: SecurityCategoryAction[];
    scope:   SecurityCategoryScope;
}

export enum SecurityCategoryAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Memberof = "MEMBEROF",
}

export interface SecurityCategoryScope {
    all?: { [key: string]: any };
}

export interface ACLSequences {
    actions: AssetsACLAction[];
    scope:   SequencesScope;
}

export interface SequencesScope {
    all?: { [key: string]: any };
}

export interface ACLThreed {
    actions: ThreedAction[];
    scope:   ThreedScope;
}

export enum ThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface ThreedScope {
    all?: { [key: string]: any };
}

export interface ACLTimeseries {
    actions: AssetsACLAction[];
    scope:   TimeseriesScope;
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

export interface ACLUser {
    actions: ApikeysACLAction[];
    scope:   UserScope;
}

export interface UserScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
