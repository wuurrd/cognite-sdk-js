/*!
 * Copyright 2019 Cognite AS
 */

/**
 * A list of objects along with possible cursors to get the next, or previous, page of
 * results
 */
export interface DataWithCursorRawDB {
  items?: DataWithCursorRawDbItem[];
  /**
   * Cursor to get the next page of results (if available).
   */
  nextCursor?: string;
}

/**
 * A NoSQL database to store customer data.
 */
export interface DataWithCursorRawDbItem {
  /**
   * Unique name of a database.
   */
  name: string;
}
