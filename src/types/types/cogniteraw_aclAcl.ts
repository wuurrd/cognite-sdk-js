export interface CogniterawACLACL {
    actions: RawAction[];
    scope:   RawScope;
}

export enum RawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface RawScope {
    all?: { [key: string]: any };
}
