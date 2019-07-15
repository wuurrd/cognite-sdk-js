export interface CognitegroupsACLACL {
    actions: GroupAction[];
    scope:   GroupScope;
}

export enum GroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface GroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
