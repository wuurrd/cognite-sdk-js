/*!
 * Copyright 2019 Cognite AS
 */

export interface DatapointsDeleteRangeObject {
  /**
   * The timestamp of the first datapoint after inclusiveBegin to not delete. If not set, only
   * deletes the datapoint at inclusiveBegin.
   */
  exclusiveEnd?: number;
  /**
   * The timestamp of first datapoint to delete.
   */
  inclusiveBegin: number;
}
