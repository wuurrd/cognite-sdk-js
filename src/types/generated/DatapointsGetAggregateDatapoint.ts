/*!
 * Copyright 2019 Cognite AS
 */

export interface DatapointsGetAggregateDatapoint {
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
  datapoints: DatapointsGetAggregateDatapointDatapoint[];
}

export interface DatapointsGetAggregateDatapointDatapoint {
  /**
   * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
   */
  timestamp: Date;
  /**
   * The integral average value in the aggregate period.
   */
  average?: number;
  /**
   * The variance of the interpolated underlying function.
   */
  continuousVariance?: number;
  /**
   * The number of datapoints in the aggregate period.
   */
  count?: number;
  /**
   * The variance of the datapoint values.
   */
  discreteVariance?: number;
  /**
   * The interpolated value of the series in the beginning of the aggregate.
   */
  interpolation?: number;
  /**
   * The maximum value in the aggregate period.
   */
  max?: number;
  /**
   * The minimum value in the aggregate period.
   */
  min?: number;
  /**
   * The last value before or at the beginning of the aggregate.
   */
  stepInterpolation?: number;
  /**
   * The sum of the datapoints in the aggregate period.
   */
  sum?: number;
  /**
   * The total variation of the interpolated underlying function.
   */
  totalVariation?: number;
}
