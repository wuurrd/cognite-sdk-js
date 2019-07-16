/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniterawACLACL {
  actions: CogniterawAclAclRawAction[];
  scope: CogniterawAclAclRawScope;
}

export enum CogniterawAclAclRawAction {
  List = 'LIST',
  Read = 'READ',
  Write = 'WRITE',
}

export interface CogniterawAclAclRawScope {
  all?: { [key: string]: any };
}
