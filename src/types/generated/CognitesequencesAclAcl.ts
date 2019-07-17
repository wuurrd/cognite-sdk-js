export interface CognitesequencesAclAcl {
    actions: SequencesAction[];
    scope: CognitesequencesAclAclSequencesScope;
}

export enum SequencesAction {
    Read = "READ",
    Write = "WRITE",
}

export interface CognitesequencesAclAclSequencesScope {
    all?: { [key: string]: any };
}
