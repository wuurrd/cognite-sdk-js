/*!
 * Copyright 2019 Cognite AS
 */

export interface DataSecurityCategorySpecDto {
  items: DataSecurityCategorySpecDtoItem[];
}

export interface DataSecurityCategorySpecDtoItem {
  /**
   * Name of the security category
   */
  name: string;
}
