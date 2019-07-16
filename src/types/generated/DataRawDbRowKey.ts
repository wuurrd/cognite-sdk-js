/*!
 * Copyright 2019 Cognite AS
 */

export interface DataRawDBRowKey {
  items?: DataRawDbRowKeyItem[];
}

/**
 * A row key
 */
export interface DataRawDbRowKeyItem {
  /**
   * Unique row key
   */
  key: string;
}
