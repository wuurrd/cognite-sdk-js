/**
 * Get datapoints after this time. The format is N[timeunit]-ago where
 * timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
 * old. You can also specify time in milliseconds since epoch. Note that for aggregates, the
 * start time is rounded down to a whole granularity unit (in UTC timezone). Daily
 * granularities (d)
 * are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
 */
export type TimestampOrStringStart = number | string;
