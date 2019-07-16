/*!
 * Copyright 2019 Cognite AS
 */

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
  groupsAcl?: DataGroupSpecACLGroup;
  assetsAcl?: DataGroupSpecACLAsset;
  eventsAcl?: DataGroupSpecACLEvent;
  filesAcl?: DataGroupSpecACLFile;
  usersAcl?: DataGroupSpecACLUser;
  projectsAcl?: DataGroupSpecACLProject;
  securityCategoriesAcl?: DataGroupSpecACLSecurityCategory;
  rawAcl?: DataGroupSpecACLRaw;
  timeSeriesAcl?: DataGroupSpecACLTimeseries;
  apikeysAcl?: DataGroupSpecACLApikey;
  threedAcl?: DataGroupSpecACLThreed;
  sequencesAcl?: DataGroupSpecACLSequences;
  analyticsAcl?: DataGroupSpecACLAnalytics;
}

export interface DataGroupSpecACLAnalytics {
  actions: DataGroupSpecAnalyticsAction[];
  scope: DataGroupSpecAnalyticsScope;
}

export enum DataGroupSpecAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface DataGroupSpecAnalyticsScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLApikey {
  actions: DataGroupSpecApikeysACLAction[];
  scope: DataGroupSpecApikeyScope;
}

export enum DataGroupSpecApikeysACLAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface DataGroupSpecApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface DataGroupSpecACLAsset {
  actions: DataGroupSpecAssetsACLAction[];
  scope: DataGroupSpecAssetScope;
}

export enum DataGroupSpecAssetsACLAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface DataGroupSpecAssetScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLEvent {
  actions: DataGroupSpecAssetsACLAction[];
  scope: DataGroupSpecEventScope;
}

export interface DataGroupSpecEventScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLFile {
  actions: DataGroupSpecAssetsACLAction[];
  scope: DataGroupSpecFileScope;
}

export interface DataGroupSpecFileScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLGroup {
  actions: DataGroupSpecGroupAction[];
  scope: DataGroupSpecGroupScope;
}

export enum DataGroupSpecGroupAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface DataGroupSpecGroupScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface DataGroupSpecACLProject {
  actions: DataGroupSpecProjectAction[];
  scope: DataGroupSpecProjectScope;
}

export enum DataGroupSpecProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface DataGroupSpecProjectScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLRaw {
  actions: DataGroupSpecRawAction[];
  scope: DataGroupSpecRawScope;
}

export enum DataGroupSpecRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface DataGroupSpecRawScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLSecurityCategory {
  actions: DataGroupSpecSecurityCategoryAction[];
  scope: DataGroupSpecSecurityCategoryScope;
}

export enum DataGroupSpecSecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface DataGroupSpecSecurityCategoryScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLSequences {
  actions: DataGroupSpecAssetsACLAction[];
  scope: DataGroupSpecSequencesScope;
}

export interface DataGroupSpecSequencesScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLThreed {
  actions: DataGroupSpecThreedAction[];
  scope: DataGroupSpecThreedScope;
}

export enum DataGroupSpecThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface DataGroupSpecThreedScope {
  all?: { [key: string]: any };
}

export interface DataGroupSpecACLTimeseries {
  actions: DataGroupSpecAssetsACLAction[];
  scope: DataGroupSpecTimeseriesScope;
}

export interface DataGroupSpecTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: DataGroupSpecScopeAssetIDScope;
  idscope?: DataGroupSpecScopeTimeSeriesIDScope;
}

export interface DataGroupSpecScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface DataGroupSpecScopeTimeSeriesIDScope {
  ids?: string[];
}

export interface DataGroupSpecACLUser {
  actions: DataGroupSpecApikeysACLAction[];
  scope: DataGroupSpecUserScope;
}

export interface DataGroupSpecUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
