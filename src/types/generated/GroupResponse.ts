/*!
 * Copyright 2019 Cognite AS
 */

export interface GroupResponse {
  items: GroupResponseItem[];
}

export interface GroupResponseItem {
  capabilities?: GroupResponseCapability[];
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

export interface GroupResponseCapability {
  groupsAcl?: GroupResponseACLGroup;
  assetsAcl?: GroupResponseACLAsset;
  eventsAcl?: GroupResponseACLEvent;
  filesAcl?: GroupResponseACLFile;
  usersAcl?: GroupResponseACLUser;
  projectsAcl?: GroupResponseACLProject;
  securityCategoriesAcl?: GroupResponseACLSecurityCategory;
  rawAcl?: GroupResponseACLRaw;
  timeSeriesAcl?: GroupResponseACLTimeseries;
  apikeysAcl?: GroupResponseACLApikey;
  threedAcl?: GroupResponseACLThreed;
  sequencesAcl?: GroupResponseACLSequences;
  analyticsAcl?: GroupResponseACLAnalytics;
}

export interface GroupResponseACLAnalytics {
  actions: GroupResponseAnalyticsAction[];
  scope: GroupResponseAnalyticsScope;
}

export enum GroupResponseAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface GroupResponseAnalyticsScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLApikey {
  actions: GroupResponseApikeysACLAction[];
  scope: GroupResponseApikeyScope;
}

export enum GroupResponseApikeysACLAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface GroupResponseApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupResponseACLAsset {
  actions: GroupResponseAssetsACLAction[];
  scope: GroupResponseAssetScope;
}

export enum GroupResponseAssetsACLAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupResponseAssetScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLEvent {
  actions: GroupResponseAssetsACLAction[];
  scope: GroupResponseEventScope;
}

export interface GroupResponseEventScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLFile {
  actions: GroupResponseAssetsACLAction[];
  scope: GroupResponseFileScope;
}

export interface GroupResponseFileScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLGroup {
  actions: GroupResponseGroupAction[];
  scope: GroupResponseGroupScope;
}

export enum GroupResponseGroupAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupResponseGroupScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupResponseACLProject {
  actions: GroupResponseProjectAction[];
  scope: GroupResponseProjectScope;
}

export enum GroupResponseProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupResponseProjectScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLRaw {
  actions: GroupResponseRawAction[];
  scope: GroupResponseRawScope;
}

export enum GroupResponseRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupResponseRawScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLSecurityCategory {
  actions: GroupResponseSecurityCategoryAction[];
  scope: GroupResponseSecurityCategoryScope;
}

export enum GroupResponseSecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface GroupResponseSecurityCategoryScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLSequences {
  actions: GroupResponseAssetsACLAction[];
  scope: GroupResponseSequencesScope;
}

export interface GroupResponseSequencesScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLThreed {
  actions: GroupResponseThreedAction[];
  scope: GroupResponseThreedScope;
}

export enum GroupResponseThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface GroupResponseThreedScope {
  all?: { [key: string]: any };
}

export interface GroupResponseACLTimeseries {
  actions: GroupResponseAssetsACLAction[];
  scope: GroupResponseTimeseriesScope;
}

export interface GroupResponseTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: GroupResponseScopeAssetIDScope;
  idscope?: GroupResponseScopeTimeSeriesIDScope;
}

export interface GroupResponseScopeAssetIDScope {
  subtreeIds?: string[];
}

export interface GroupResponseScopeTimeSeriesIDScope {
  ids?: string[];
}

export interface GroupResponseACLUser {
  actions: GroupResponseApikeysACLAction[];
  scope: GroupResponseUserScope;
}

export interface GroupResponseUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
