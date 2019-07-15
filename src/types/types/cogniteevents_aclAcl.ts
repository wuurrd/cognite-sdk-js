export interface CogniteeventsACLACL {
    actions: EventAction[];
    scope:   EventScope;
}

export enum EventAction {
    Read = "READ",
    Write = "WRITE",
}

export interface EventScope {
    all?: { [key: string]: any };
}
