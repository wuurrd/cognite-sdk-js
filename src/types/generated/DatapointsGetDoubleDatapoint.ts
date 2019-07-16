/*!
 * Copyright 2019 Cognite AS
 */

export interface DatapointsGetDoubleDatapoint {
  /**
   * The external ID of the time series the datapoints belong to.
   */
  externalId?: string;
  /**
   * The ID of the time series the datapoints belong to.
   */
  id: number;
  /**
   * The list of datapoints
   */
  datapoints: DatapointsGetDoubleDatapointDatapoint[];
  /**
   * Whether the time series is string valued or not.
   */
  isString: boolean;
}

export interface DatapointsGetDoubleDatapointDatapoint {
  /**
   * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
   */
  timestamp: number;
  /**
   * The data value.
   */
  value: number;
}
