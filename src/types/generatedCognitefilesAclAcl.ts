export interface CognitefilesAclAcl {
    actions: FileAction[];
    scope: CognitefilesAclAclFileScope;
}

export enum FileAction {
    Read = "READ",
    Write = "WRITE",
}

export interface CognitefilesAclAclFileScope {
    all?: { [key: string]: any };
}
