export interface CogniteassetsACLACL {
    actions: AssetAction[];
    scope:   AssetScope;
}

export enum AssetAction {
    Read = "READ",
    Write = "WRITE",
}

export interface AssetScope {
    all?: { [key: string]: any };
}
