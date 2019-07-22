/*!
 * Copyright 2019 Cognite AS
 */

export interface DataRawDBRowKey {
  items?: DataRawDBRowKeyItem[];
}

/**
 * A row key
 */
export interface DataRawDBRowKeyItem {
  /**
   * Unique row key
   */
  key: string;
}
