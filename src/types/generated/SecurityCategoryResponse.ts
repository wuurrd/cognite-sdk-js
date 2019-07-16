/*!
 * Copyright 2019 Cognite AS
 */

export interface SecurityCategoryResponse {
  items?: SecurityCategoryResponseItem[];
}

export interface SecurityCategoryResponseItem {
  /**
   * Id of the security category
   */
  id: number;
  /**
   * Name of the security category
   */
  name: string;
}
