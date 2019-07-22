export interface CogniterawAclAcl {
    actions: CogniterawAclAclRawAction[];
    scope: CogniterawAclAclRawScope;
}

export enum CogniterawAclAclRawAction {
    List = "LIST",
    Read = "READ",
    Write = "WRITE",
}

export interface CogniterawAclAclRawScope {
    all?: { [key: string]: any };
}
