/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniteCapability {
  groupsAcl?: CogniteCapabilityACLGroup;
  assetsAcl?: CogniteCapabilityACLAsset;
  eventsAcl?: CogniteCapabilityACLEvent;
  filesAcl?: CogniteCapabilityACLFile;
  usersAcl?: CogniteCapabilityACLUser;
  projectsAcl?: CogniteCapabilityACLProject;
  securityCategoriesAcl?: CogniteCapabilityACLSecurityCategory;
  rawAcl?: CogniteCapabilityACLRaw;
  timeSeriesAcl?: CogniteCapabilityACLTimeseries;
  apikeysAcl?: CogniteCapabilityACLApikey;
  threedAcl?: CogniteCapabilityACLThreed;
  sequencesAcl?: CogniteCapabilityACLSequences;
  analyticsAcl?: CogniteCapabilityACLAnalytics;
}

export interface CogniteCapabilityACLAnalytics {
  actions: CogniteCapabilityAnalyticsAction[];
  scope: CogniteCapabilityAnalyticsScope;
}

export enum CogniteCapabilityAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface CogniteCapabilityAnalyticsScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLApikey {
  actions: CogniteCapabilityApikeysACLAction[];
  scope: CogniteCapabilityApikeyScope;
}

export enum CogniteCapabilityApikeysACLAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface CogniteCapabilityApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface CogniteCapabilityACLAsset {
  actions: CogniteCapabilityAssetsACLAction[];
  scope: CogniteCapabilityAssetScope;
}

export enum CogniteCapabilityAssetsACLAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CogniteCapabilityAssetScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLEvent {
  actions: CogniteCapabilityAssetsACLAction[];
  scope: CogniteCapabilityEventScope;
}

export interface CogniteCapabilityEventScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLFile {
  actions: CogniteCapabilityAssetsACLAction[];
  scope: CogniteCapabilityFileScope;
}

export interface CogniteCapabilityFileScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLGroup {
  actions: CogniteCapabilityGroupAction[];
  scope: CogniteCapabilityGroupScope;
}

export enum CogniteCapabilityGroupAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface CogniteCapabilityGroupScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface CogniteCapabilityACLProject {
  actions: CogniteCapabilityProjectAction[];
  scope: CogniteCapabilityProjectScope;
}

export enum CogniteCapabilityProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface CogniteCapabilityProjectScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLRaw {
  actions: CogniteCapabilityRawAction[];
  scope: CogniteCapabilityRawScope;
}

export enum CogniteCapabilityRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface CogniteCapabilityRawScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLSecurityCategory {
  actions: CogniteCapabilitySecurityCategoryAction[];
  scope: CogniteCapabilitySecurityCategoryScope;
}

export enum CogniteCapabilitySecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface CogniteCapabilitySecurityCategoryScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLSequences {
  actions: CogniteCapabilityAssetsACLAction[];
  scope: CogniteCapabilitySequencesScope;
}

export interface CogniteCapabilitySequencesScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLThreed {
  actions: CogniteCapabilityThreedAction[];
  scope: CogniteCapabilityThreedScope;
}

export enum CogniteCapabilityThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface CogniteCapabilityThreedScope {
  all?: { [key: string]: any };
}

export interface CogniteCapabilityACLTimeseries {
  actions: CogniteCapabilityAssetsACLAction[];
  scope: CogniteCapabilityTimeseriesScope;
}

export interface CogniteCapabilityTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: CogniteCapabilityScopeAssetIDScope;
  idscope?: CogniteCapabilityScopeTimeSeriesIDScope;
}

export interface CogniteCapabilityScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface CogniteCapabilityScopeTimeSeriesIDScope {
  ids?: string[];
}

export interface CogniteCapabilityACLUser {
  actions: CogniteCapabilityApikeysACLAction[];
  scope: CogniteCapabilityUserScope;
}

export interface CogniteCapabilityUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
