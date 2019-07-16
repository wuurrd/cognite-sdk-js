/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniteeventsACLACL {
  actions: EventAction[];
  scope: CogniteeventsAclAclEventScope;
}

export enum EventAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CogniteeventsAclAclEventScope {
  all?: { [key: string]: any };
}
