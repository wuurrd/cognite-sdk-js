/*!
 * Copyright 2019 Cognite AS
 */

export interface DataGroup {
  items: DataGroupItem[];
}

export interface DataGroupItem {
  capabilities?: DataGroupCapability[];
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

export interface DataGroupCapability {
  groupsAcl?: DataGroupACLGroup;
  assetsAcl?: DataGroupACLAsset;
  eventsAcl?: DataGroupACLEvent;
  filesAcl?: DataGroupACLFile;
  usersAcl?: DataGroupACLUser;
  projectsAcl?: DataGroupACLProject;
  securityCategoriesAcl?: DataGroupACLSecurityCategory;
  rawAcl?: DataGroupACLRaw;
  timeSeriesAcl?: DataGroupACLTimeseries;
  apikeysAcl?: DataGroupACLApikey;
  threedAcl?: DataGroupACLThreed;
  sequencesAcl?: DataGroupACLSequences;
  analyticsAcl?: DataGroupACLAnalytics;
}

export interface DataGroupACLAnalytics {
  actions: DataGroupAnalyticsAction[];
  scope: DataGroupAnalyticsScope;
}

export enum DataGroupAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface DataGroupAnalyticsScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLApikey {
  actions: DataGroupApikeysACLAction[];
  scope: DataGroupApikeyScope;
}

export enum DataGroupApikeysACLAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface DataGroupApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface DataGroupACLAsset {
  actions: DataGroupAssetsACLAction[];
  scope: DataGroupAssetScope;
}

export enum DataGroupAssetsACLAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface DataGroupAssetScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLEvent {
  actions: DataGroupAssetsACLAction[];
  scope: DataGroupEventScope;
}

export interface DataGroupEventScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLFile {
  actions: DataGroupAssetsACLAction[];
  scope: DataGroupFileScope;
}

export interface DataGroupFileScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLGroup {
  actions: DataGroupGroupAction[];
  scope: DataGroupGroupScope;
}

export enum DataGroupGroupAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface DataGroupGroupScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface DataGroupACLProject {
  actions: DataGroupProjectAction[];
  scope: DataGroupProjectScope;
}

export enum DataGroupProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface DataGroupProjectScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLRaw {
  actions: DataGroupRawAction[];
  scope: DataGroupRawScope;
}

export enum DataGroupRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface DataGroupRawScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLSecurityCategory {
  actions: DataGroupSecurityCategoryAction[];
  scope: DataGroupSecurityCategoryScope;
}

export enum DataGroupSecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface DataGroupSecurityCategoryScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLSequences {
  actions: DataGroupAssetsACLAction[];
  scope: DataGroupSequencesScope;
}

export interface DataGroupSequencesScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLThreed {
  actions: DataGroupThreedAction[];
  scope: DataGroupThreedScope;
}

export enum DataGroupThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface DataGroupThreedScope {
  all?: { [key: string]: any };
}

export interface DataGroupACLTimeseries {
  actions: DataGroupAssetsACLAction[];
  scope: DataGroupTimeseriesScope;
}

export interface DataGroupTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: DataGroupScopeAssetIDScope;
  idscope?: DataGroupScopeTimeSeriesIDScope;
}

export interface DataGroupScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface DataGroupScopeTimeSeriesIDScope {
  ids?: string[];
}

export interface DataGroupACLUser {
  actions: DataGroupApikeysACLAction[];
  scope: DataGroupUserScope;
}

export interface DataGroupUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
