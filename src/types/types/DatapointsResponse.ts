/**
 * The list of responses. The order matches the requests order.
 */
export interface DatapointsResponse {
    items: Item[];
}

export interface Item {
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
    datapoints: Datapoint[];
    /**
     * Whether the time series is string valued or not.
     */
    isString: boolean;
}

export interface Datapoint {
    /**
     * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
     */
    timestamp: number;
    /**
     * The data value.
     */
    value: Value;
}

export type Value = number | string;
