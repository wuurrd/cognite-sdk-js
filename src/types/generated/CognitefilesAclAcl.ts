/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitefilesACLACL {
  actions: FileAction[];
  scope: CognitefilesAclAclFileScope;
}

export enum FileAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CognitefilesAclAclFileScope {
  all?: { [key: string]: any };
}
