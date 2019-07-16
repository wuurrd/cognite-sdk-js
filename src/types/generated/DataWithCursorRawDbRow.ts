/*!
 * Copyright 2019 Cognite AS
 */

/**
 * A list of objects along with possible cursors to get the next, or previous, page of
 * results
 */
export interface DataWithCursorRawDBRow {
  items?: DataWithCursorRawDBRowItem[];
  /**
   * Cursor to get the next page of results (if available).
   */
  nextCursor?: string;
}

export interface DataWithCursorRawDBRowItem {
  /**
   * Row data stored as a JSON object.
   */
  columns: { [key: string]: any };
  /**
   * Unique row key
   */
  key: string;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  lastUpdatedTime: number;
}
