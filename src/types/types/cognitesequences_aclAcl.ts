export interface CognitesequencesACLACL {
    actions: SequencesAction[];
    scope:   SequencesScope;
}

export enum SequencesAction {
    Read = "READ",
    Write = "WRITE",
}

export interface SequencesScope {
    all?: { [key: string]: any };
}
