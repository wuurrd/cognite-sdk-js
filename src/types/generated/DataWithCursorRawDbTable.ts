/*!
 * Copyright 2019 Cognite AS
 */

/**
 * A list of objects along with possible cursors to get the next, or previous, page of
 * results
 */
export interface DataWithCursorRawDbTable {
  items?: DataWithCursorRawDbTableItem[];
  /**
   * Cursor to get the next page of results (if available).
   */
  nextCursor?: string;
}

/**
 * A NoSQL database table to store customer data
 */
export interface DataWithCursorRawDbTableItem {
  /**
   * Unique name of the table
   */
  name: string;
}
