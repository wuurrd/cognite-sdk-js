export interface CogniteusersACLACL {
    actions: UserAction[];
    scope:   UserScope;
}

export enum UserAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface UserScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
