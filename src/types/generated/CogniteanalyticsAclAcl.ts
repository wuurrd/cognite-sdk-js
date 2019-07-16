/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniteanalyticsACLACL {
  actions: CogniteanalyticsAclAclAnalyticsAction[];
  scope: CogniteanalyticsAclAclAnalyticsScope;
}

export enum CogniteanalyticsAclAclAnalyticsAction {
  Execute = 'EXECUTE',
  List = 'LIST',
  Read = 'READ',
}

export interface CogniteanalyticsAclAclAnalyticsScope {
  all?: { [key: string]: any };
}
