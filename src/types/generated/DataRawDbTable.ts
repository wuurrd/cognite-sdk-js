/*!
 * Copyright 2019 Cognite AS
 */

export interface DataRawDbTable {
  items?: DataRawDbTableItem[];
}

/**
 * A NoSQL database table to store customer data
 */
export interface DataRawDbTableItem {
  /**
   * Unique name of the table
   */
  name: string;
}
