/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitesequencesACLACL {
  actions: SequencesAction[];
  scope: CognitesequencesAclAclSequencesScope;
}

export enum SequencesAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CognitesequencesAclAclSequencesScope {
  all?: { [key: string]: any };
}
