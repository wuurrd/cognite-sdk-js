/*!
 * Copyright 2019 Cognite AS
 */

export interface DataRawDB {
  items?: DataRawDBItem[];
}

/**
 * A NoSQL database to store customer data.
 */
export interface DataRawDBItem {
  /**
   * Unique name of a database.
   */
  name: string;
}
