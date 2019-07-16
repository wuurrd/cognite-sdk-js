/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitethreedACLACL {
  actions: CognitethreedAclAclThreedAction[];
  scope: CognitethreedAclAclThreedScope;
}

export enum CognitethreedAclAclThreedAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface CognitethreedAclAclThreedScope {
  all?: { [key: string]: any };
}
