/*!
 * Copyright 2019 Cognite AS
 */

export interface DataIdentifiers {
  /**
   * List of ID objects
   */
  items: DataIdentifiersItem[];
}

export interface DataIdentifiersItem {
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id: number;
}
