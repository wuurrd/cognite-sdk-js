export interface CognitesecuritycategoriesACLACL {
    actions: SecurityCategoryAction[];
    scope:   SecurityCategoryScope;
}

export enum SecurityCategoryAction {
    Create = "CREATE",
    Delete = "DELETE",
    List = "LIST",
    Memberof = "MEMBEROF",
}

export interface SecurityCategoryScope {
    all?: { [key: string]: any };
}
