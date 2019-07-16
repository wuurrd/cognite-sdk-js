/*!
 * Copyright 2019 Cognite AS
 */

export interface CogniteassetsAclAcl {
  actions: AssetAction[];
  scope: CogniteassetsAclAclAssetScope;
}

export enum AssetAction {
  Read = 'READ',
  Write = 'WRITE',
}

export interface CogniteassetsAclAclAssetScope {
  all?: { [key: string]: any };
}
