/*!
 * Copyright 2019 Cognite AS
 */

export interface DatapointsQueryPropertiesObject {
  /**
   * Specify the aggregates to return. Use default if null. If the default is a set of
   * aggregates, specify an empty string to get raw data.
   */
  aggregates?: DatapointsQueryPropertiesAggregate[];
  /**
   * Get datapoints up to, but excluding, this point in time. Same format as for start. Note
   * that when using aggregates, the end will be rounded up such that the last aggregate
   * represents a full aggregation interval containing the original end, where the interval is
   * the granularity unit times the granularity multiplier. For granularity 2d, the
   * aggregation interval is 2 days, if end was originally 3 days after the start, it will be
   * rounded to 4 days after the start.
   */
  end?: number | string;
  /**
   * The granularity size and granularity of the aggregates.
   */
  granularity?: string;
  /**
   * Whether to include the last datapoint before the requested time period,and the first one
   * after. This option can be useful for interpolating data. It is not available for
   * aggregates.
   */
  includeOutsidePoints?: boolean;
  /**
   * Return up to this number of datapoints.
   */
  limit?: number;
  /**
   * Get datapoints after this time. The format is N[timeunit]-ago where
   * timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
   * old. You can also specify time in milliseconds since epoch. Note that for aggregates, the
   * start time is rounded down to a whole granularity unit (in UTC timezone). Daily
   * granularities (d)
   * are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
   */
  start?: number | string;
}

/**
 * Specify the aggregates to return. Use default if null. If the default is a set of
 * aggregates, specify an empty string to get raw data.
 */
export enum DatapointsQueryPropertiesAggregate {
  Average = 'average',
  ContinuousVariance = 'continuousVariance',
  Count = 'count',
  DiscreteVariance = 'discreteVariance',
  Interpolation = 'interpolation',
  Max = 'max',
  Min = 'min',
  StepInterpolation = 'stepInterpolation',
  Sum = 'sum',
  TotalVariation = 'totalVariation',
}
