/*!
 * Copyright 2019 Cognite AS
 */

export interface CognitesecuritycategoriesAclAcl {
  actions: CognitesecuritycategoriesAclAclSecurityCategoryAction[];
  scope: CognitesecuritycategoriesAclAclSecurityCategoryScope;
}

export enum CognitesecuritycategoriesAclAclSecurityCategoryAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Memberof = 'MEMBEROF',
}

export interface CognitesecuritycategoriesAclAclSecurityCategoryScope {
  all?: { [key: string]: any };
}
