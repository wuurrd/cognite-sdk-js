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
  groupsAcl?: GroupSpecAclGroup;
  assetsAcl?: GroupSpecAclAsset;
  eventsAcl?: GroupSpecAclEvent;
  filesAcl?: GroupSpecAclFile;
  usersAcl?: GroupSpecAclUser;
  projectsAcl?: GroupSpecAclProject;
  securityCategoriesAcl?: GroupSpecAclSecurityCategory;
  rawAcl?: GroupSpecAclRaw;
  timeSeriesAcl?: GroupSpecAclTimeseries;
  apikeysAcl?: GroupSpecAclApikey;
  threedAcl?: GroupSpecAclThreed;
  sequencesAcl?: GroupSpecAclSequences;
  analyticsAcl?: GroupSpecAclAnalytics;
}

export interface GroupSpecAclAnalytics {
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

export interface GroupSpecAclApikey {
  actions: GroupSpecApikeysAclAction[];
  scope: GroupSpecApikeyScope;
}

export enum GroupSpecApikeysAclAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface GroupSpecApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupSpecAclAsset {
  actions: GroupSpecAssetsAclAction[];
  scope: GroupSpecAssetScope;
}

export enum GroupSpecAssetsAclAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupSpecAssetScope {
  all?: { [key: string]: any };
}

export interface GroupSpecAclEvent {
  actions: GroupSpecAssetsAclAction[];
  scope: GroupSpecEventScope;
}

export interface GroupSpecEventScope {
  all?: { [key: string]: any };
}

export interface GroupSpecAclFile {
  actions: GroupSpecAssetsAclAction[];
  scope: GroupSpecFileScope;
}

export interface GroupSpecFileScope {
  all?: { [key: string]: any };
}

export interface GroupSpecAclGroup {
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

export interface GroupSpecAclProject {
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

export interface GroupSpecAclRaw {
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

export interface GroupSpecAclSecurityCategory {
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

export interface GroupSpecAclSequences {
  actions: GroupSpecAssetsAclAction[];
  scope: GroupSpecSequencesScope;
}

export interface GroupSpecSequencesScope {
  all?: { [key: string]: any };
}

export interface GroupSpecAclThreed {
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

export interface GroupSpecAclTimeseries {
  actions: GroupSpecAssetsAclAction[];
  scope: GroupSpecTimeseriesScope;
}

export interface GroupSpecTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: GroupSpecScopeAssetIdScope;
  idscope?: GroupSpecScopeTimeSeriesIdScope;
}

export interface GroupSpecScopeAssetIdScope {
  subtreeIds?: string[];
}

export interface GroupSpecScopeTimeSeriesIdScope {
  ids?: string[];
}

export interface GroupSpecAclUser {
  actions: GroupSpecApikeysAclAction[];
  scope: GroupSpecUserScope;
}

export interface GroupSpecUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
