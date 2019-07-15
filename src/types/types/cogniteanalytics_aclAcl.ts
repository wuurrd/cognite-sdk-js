export interface CogniteanalyticsACLACL {
    actions: AnalyticsAction[];
    scope:   AnalyticsScope;
}

export enum AnalyticsAction {
    Execute = "EXECUTE",
    List = "LIST",
    Read = "READ",
}

export interface AnalyticsScope {
    all?: { [key: string]: any };
}
