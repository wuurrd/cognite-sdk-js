/*!
 * Copyright 2019 Cognite AS
 */

export interface Group {
  capabilities?: GroupCapability[];
  deletedTime?: number;
  id: number;
  isDeleted: boolean;
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
  groupsAcl?: GroupACLGroup;
  assetsAcl?: GroupACLAsset;
  eventsAcl?: GroupACLEvent;
  filesAcl?: GroupACLFile;
  usersAcl?: GroupACLUser;
  projectsAcl?: GroupACLProject;
  securityCategoriesAcl?: GroupACLSecurityCategory;
  rawAcl?: GroupACLRaw;
  timeSeriesAcl?: GroupACLTimeseries;
  apikeysAcl?: GroupACLApikey;
  threedAcl?: GroupACLThreed;
  sequencesAcl?: GroupACLSequences;
  analyticsAcl?: GroupACLAnalytics;
}

export interface GroupACLAnalytics {
  actions: GroupAnalyticsAction[];
  scope: GroupAnalyticsScope;
}

export enum GroupAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface GroupAnalyticsScope {
  all?: { [key: string]: any };
}

export interface GroupACLApikey {
  actions: GroupApikeysACLAction[];
  scope: GroupApikeyScope;
}

export enum GroupApikeysACLAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface GroupApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupACLAsset {
  actions: GroupAssetsACLAction[];
  scope: GroupAssetScope;
}

export enum GroupAssetsACLAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupAssetScope {
  all?: { [key: string]: any };
}

export interface GroupACLEvent {
  actions: GroupAssetsACLAction[];
  scope: GroupEventScope;
}

export interface GroupEventScope {
  all?: { [key: string]: any };
}

export interface GroupACLFile {
  actions: GroupAssetsACLAction[];
  scope: GroupFileScope;
}

export interface GroupFileScope {
  all?: { [key: string]: any };
}

export interface GroupACLGroup {
  actions: GroupGroupAction[];
  scope: GroupGroupScope;
}

export enum GroupGroupAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupGroupScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupACLProject {
  actions: GroupProjectAction[];
  scope: GroupProjectScope;
}

export enum GroupProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupProjectScope {
  all?: { [key: string]: any };
}

export interface GroupACLRaw {
  actions: GroupRawAction[];
  scope: GroupRawScope;
}

export enum GroupRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupRawScope {
  all?: { [key: string]: any };
}

export interface GroupACLSecurityCategory {
  actions: GroupSecurityCategoryAction[];
  scope: GroupSecurityCategoryScope;
}

export enum GroupSecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface GroupSecurityCategoryScope {
  all?: { [key: string]: any };
}

export interface GroupACLSequences {
  actions: GroupAssetsACLAction[];
  scope: GroupSequencesScope;
}

export interface GroupSequencesScope {
  all?: { [key: string]: any };
}

export interface GroupACLThreed {
  actions: GroupThreedAction[];
  scope: GroupThreedScope;
}

export enum GroupThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupThreedScope {
  all?: { [key: string]: any };
}

export interface GroupACLTimeseries {
  actions: GroupAssetsACLAction[];
  scope: GroupTimeseriesScope;
}

export interface GroupTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: GroupScopeAssetIDScope;
  idscope?: GroupScopeTimeSeriesIDScope;
}

export interface GroupScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface GroupScopeTimeSeriesIDScope {
  ids?: string[];
}

export interface GroupACLUser {
  actions: GroupApikeysACLAction[];
  scope: GroupUserScope;
}

export interface GroupUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
