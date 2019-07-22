/*!
 * Copyright 2019 Cognite AS
 */

export interface DatapointsGetStringDatapoint {
  /**
   * The external ID of the time series the datapoints belong to.
   */
  externalId?: string;
  /**
   * The ID of the time series the datapoints belong to.
   */
  id: number;
  /**
   * The list of datapoints.
   */
  datapoints: DatapointsGetStringDatapointDatapoint[];
  /**
   * Whether the time series is string valued or not.
   */
  isString: boolean;
}

export interface DatapointsGetStringDatapointDatapoint {
  /**
   * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
   */
  timestamp: Date;
  /**
   * The data value.
   */
  value: string;
}
