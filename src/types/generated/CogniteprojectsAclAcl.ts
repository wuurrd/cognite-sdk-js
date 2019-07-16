/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniteprojectsACLACL {
  actions: CogniteprojectsAclAclProjectAction[];
  scope: CogniteprojectsAclAclProjectScope;
}

export enum CogniteprojectsAclAclProjectAction {
  Create = 'CREATE',
  List = 'LIST',
  Read = 'READ',
  Update = 'UPDATE',
}

export interface CogniteprojectsAclAclProjectScope {
  all?: { [key: string]: any };
}
