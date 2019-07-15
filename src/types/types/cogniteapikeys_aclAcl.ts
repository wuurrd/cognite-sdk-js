export interface CogniteapikeysACLACL {
    actions: ApikeyAction[];
    scope:   ApikeyScope;
}

export enum ApikeyAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface ApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
