/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniteusersAclAcl {
  actions: UserAction[];
  scope: CogniteusersAclAclUserScope;
}

export enum UserAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
}

export interface CogniteusersAclAclUserScope {
  all?: { [key: string]: any };
  currentuserscope?: { [key: string]: any };
}
