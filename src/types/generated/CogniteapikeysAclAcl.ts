export interface CogniteapikeysAclAcl {
    actions: ApikeyAction[];
    scope: CogniteapikeysAclAclApikeyScope;
}

export enum ApikeyAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
}

export interface CogniteapikeysAclAclApikeyScope {
    all?:              { [key: string]: any };
    currentuserscope?: { [key: string]: any };
}
