/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Raw row result written in CSV format, with column columnHeaders.
 */
export interface RawRowCSV {
  /**
   * Headers for the different columns in the response.
   */
  columnHeaders?: string[];
  /**
   * Rows of column values, in same order as columnHeaders.
   */
  rows?: { [key: string]: any }[][];
}
