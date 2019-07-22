export interface CogniteprojectsAclAcl {
    actions: CogniteprojectsAclAclProjectAction[];
    scope: CogniteprojectsAclAclProjectScope;
}

export enum CogniteprojectsAclAclProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface CogniteprojectsAclAclProjectScope {
    all?: { [key: string]: any };
}
