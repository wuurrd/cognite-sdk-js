export interface GetAggregateDatapoint {
    /**
     * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
     */
    timestamp: number;
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
