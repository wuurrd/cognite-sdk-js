/**
 * Get datapoints up to, but excluding, this point in time. Same format as for start. Note
 * that when using aggregates, the end will be rounded up such that the last aggregate
 * represents a full aggregation interval containing the original end, where the interval is
 * the granularity unit times the granularity multiplier. For granularity 2d, the
 * aggregation interval is 2 days, if end was originally 3 days after the start, it will be
 * rounded to 4 days after the start.
 */
export type TimestampOrStringEnd = number | string;
