export interface CognitethreedACLACL {
    actions: ThreedAction[];
    scope:   ThreedScope;
}

export enum ThreedAction {
    Create = "CREATE",
    Delete = "DELETE",
    Read = "READ",
    Update = "UPDATE",
}

export interface ThreedScope {
    all?: { [key: string]: any };
}
