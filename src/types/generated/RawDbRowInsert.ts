/*!
 * Copyright 2019 Cognite AS
 */

export interface RawDbRowInsert {
  /**
   * Row data stored as a JSON object.
   */
  columns: { [key: string]: any };
  /**
   * Unique row key
   */
  key: string;
}
