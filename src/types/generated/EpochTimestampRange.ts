/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Range between two timestamps.
 */
export interface EpochTimestampRange {
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  max?: number;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  min?: number;
}
