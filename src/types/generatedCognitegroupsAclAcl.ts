export interface CognitegroupsAclAcl {
    actions: CognitegroupsAclAclGroupAction[];
    scope: CognitegroupsAclAclGroupScope;
}

export enum CognitegroupsAclAclGroupAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Read = "READ",
    Update = "UPDATE",
}

export interface CognitegroupsAclAclGroupScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
