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
  groupsAcl?: GroupResponseAclGroup;
  assetsAcl?: GroupResponseAclAsset;
  eventsAcl?: GroupResponseAclEvent;
  filesAcl?: GroupResponseAclFile;
  usersAcl?: GroupResponseAclUser;
  projectsAcl?: GroupResponseAclProject;
  securityCategoriesAcl?: GroupResponseAclSecurityCategory;
  rawAcl?: GroupResponseAclRaw;
  timeSeriesAcl?: GroupResponseAclTimeseries;
  apikeysAcl?: GroupResponseAclApikey;
  threedAcl?: GroupResponseAclThreed;
  sequencesAcl?: GroupResponseAclSequences;
  analyticsAcl?: GroupResponseAclAnalytics;
}

export interface GroupResponseAclAnalytics {
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

export interface GroupResponseAclApikey {
  actions: GroupResponseApikeysAclAction[];
  scope: GroupResponseApikeyScope;
}

export enum GroupResponseApikeysAclAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface GroupResponseApikeyScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}

export interface GroupResponseAclAsset {
  actions: GroupResponseAssetsAclAction[];
  scope: GroupResponseAssetScope;
}

export enum GroupResponseAssetsAclAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface GroupResponseAssetScope {
  all?: { [key: string]: any };
}

export interface GroupResponseAclEvent {
  actions: GroupResponseAssetsAclAction[];
  scope: GroupResponseEventScope;
}

export interface GroupResponseEventScope {
  all?: { [key: string]: any };
}

export interface GroupResponseAclFile {
  actions: GroupResponseAssetsAclAction[];
  scope: GroupResponseFileScope;
}

export interface GroupResponseFileScope {
  all?: { [key: string]: any };
}

export interface GroupResponseAclGroup {
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

export interface GroupResponseAclProject {
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

export interface GroupResponseAclRaw {
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

export interface GroupResponseAclSecurityCategory {
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

export interface GroupResponseAclSequences {
  actions: GroupResponseAssetsAclAction[];
  scope: GroupResponseSequencesScope;
}

export interface GroupResponseSequencesScope {
  all?: { [key: string]: any };
}

export interface GroupResponseAclThreed {
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

export interface GroupResponseAclTimeseries {
  actions: GroupResponseAssetsAclAction[];
  scope: GroupResponseTimeseriesScope;
}

export interface GroupResponseTimeseriesScope {
  all?: { [key: string]: any };
  assetIdScope?: GroupResponseScopeAssetIdScope;
  idscope?: GroupResponseScopeTimeSeriesIdScope;
}

export interface GroupResponseScopeAssetIdScope {
  subtreeIds?: string[];
}

export interface GroupResponseScopeTimeSeriesIdScope {
  ids?: string[];
}

export interface GroupResponseAclUser {
  actions: GroupResponseApikeysAclAction[];
  scope: GroupResponseUserScope;
}

export interface GroupResponseUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
