/*!
 * Copyright 2019 Cognite AS
 */

export interface GetStringDatapoint {
  /**
   * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
   */
  timestamp: number;
  /**
   * The data value.
   */
  value: string;
}
