/*!
 * Copyright 2019 Cognite AS
 */

/**
 * A specification for creating a new group
 */
export interface GroupSpec {
  capabilities?: GroupSpecCapability[];
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

export interface GroupSpecCapability {
  groupsAcl?: GroupSpecACLGroup;
  assetsAcl?: GroupSpecACLAsset;
  eventsAcl?: GroupSpecACLEvent;
  filesAcl?: GroupSpecACLFile;
  usersAcl?: GroupSpecACLUser;
  projectsAcl?: GroupSpecACLProject;
  securityCategoriesAcl?: GroupSpecACLSecurityCategory;
  rawAcl?: GroupSpecACLRaw;
  timeSeriesAcl?: GroupSpecACLTimeseries;
  apikeysAcl?: GroupSpecACLApikey;
  threedAcl?: GroupSpecACLThreed;
  sequencesAcl?: GroupSpecACLSequences;
  analyticsAcl?: GroupSpecACLAnalytics;
}

export interface GroupSpecACLAnalytics {
  actions: GroupSpecAnalyticsAction[];
  scope: GroupSpecAnalyticsScope;
}

export enum GroupSpecAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface GroupSpecAnalyticsScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLApikey {
  actions: GroupSpecApikeysACLAction[];
  scope: GroupSpecApikeyScope;
}

export enum GroupSpecApikeysACLAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface GroupSpecApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupSpecACLAsset {
  actions: GroupSpecAssetsACLAction[];
  scope: GroupSpecAssetScope;
}

export enum GroupSpecAssetsACLAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupSpecAssetScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLEvent {
  actions: GroupSpecAssetsACLAction[];
  scope: GroupSpecEventScope;
}

export interface GroupSpecEventScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLFile {
  actions: GroupSpecAssetsACLAction[];
  scope: GroupSpecFileScope;
}

export interface GroupSpecFileScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLGroup {
  actions: GroupSpecGroupAction[];
  scope: GroupSpecGroupScope;
}

export enum GroupSpecGroupAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupSpecGroupScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupSpecACLProject {
  actions: GroupSpecProjectAction[];
  scope: GroupSpecProjectScope;
}

export enum GroupSpecProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupSpecProjectScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLRaw {
  actions: GroupSpecRawAction[];
  scope: GroupSpecRawScope;
}

export enum GroupSpecRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupSpecRawScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLSecurityCategory {
  actions: GroupSpecSecurityCategoryAction[];
  scope: GroupSpecSecurityCategoryScope;
}

export enum GroupSpecSecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface GroupSpecSecurityCategoryScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLSequences {
  actions: GroupSpecAssetsACLAction[];
  scope: GroupSpecSequencesScope;
}

export interface GroupSpecSequencesScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLThreed {
  actions: GroupSpecThreedAction[];
  scope: GroupSpecThreedScope;
}

export enum GroupSpecThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupSpecThreedScope {
  all?: { [key: string]: any };
}

export interface GroupSpecACLTimeseries {
  actions: GroupSpecAssetsACLAction[];
  scope: GroupSpecTimeseriesScope;
}

export interface GroupSpecTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: GroupSpecScopeAssetIDScope;
  idscope?: GroupSpecScopeTimeSeriesIDScope;
}

export interface GroupSpecScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface GroupSpecScopeTimeSeriesIDScope {
  ids?: string[];
}

export interface GroupSpecACLUser {
  actions: GroupSpecApikeysACLAction[];
  scope: GroupSpecUserScope;
}

export interface GroupSpecUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
