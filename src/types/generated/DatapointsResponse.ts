/**
 * The list of responses. The order matches the requests order.
 */
export interface DatapointsResponse {
    items: DatapointsResponseItem[];
}

export interface DatapointsResponseItem {
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
     *
     * The list of datapoints
     */
    datapoints: DatapointsResponseDatapoint[];
    /**
     * Whether the time series is string valued or not.
     */
    isString: boolean;
}

export interface DatapointsResponseDatapoint {
    /**
     * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
     */
    timestamp: Date;
    /**
     * The data value.
     */
    value: number | string;
}
