export interface CogniteprojectsACLACL {
    actions: ProjectAction[];
    scope:   ProjectScope;
}

export enum ProjectAction {
    Create = "CREATE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface ProjectScope {
    all?: { [key: string]: any };
}
