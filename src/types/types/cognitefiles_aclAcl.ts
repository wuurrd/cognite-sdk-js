export interface CognitefilesACLACL {
    actions: FileAction[];
    scope:   FileScope;
}

export enum FileAction {
    Read = "READ",
    Write = "WRITE",
}

export interface FileScope {
    all?: { [key: string]: any };
}
