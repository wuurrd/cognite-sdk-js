export interface CognitethreedAclAcl {
    actions: CognitethreedAclAclThreedAction[];
    scope: CognitethreedAclAclThreedScope;
}

export enum CognitethreedAclAclThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface CognitethreedAclAclThreedScope {
    all?: { [key: string]: any };
}
