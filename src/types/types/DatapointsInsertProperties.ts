export type DatapointsInsertProperties = any[] | boolean | number | number | null | DatapointsInsertPropertiesObject | string;

export interface DatapointsInsertPropertiesObject {
    /**
     * The list of datapoints. The limit per request is 100000 datapoints.
     */
    datapoints: Datapoint[];
}

export interface Datapoint {
    /**
     * The timestamp in milliseconds since the epoch (Jan 1, 1970).
     */
    timestamp: number;
    /**
     * The numerical data value of a numerical metric.
     *
     * The string data value of a string metric.
     */
    value: Value;
}

export type Value = number | string;
