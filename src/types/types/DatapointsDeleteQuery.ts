export interface DatapointsDeleteQuery {
    /**
     * List of delete filters
     */
    items: Item[];
}

/**
 * Select time series and datapoints to delete.
 */
export interface Item {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The timestamp of the first datapoint after inclusiveBegin to not delete. If not set, only
     * deletes the datapoint at inclusiveBegin.
     */
    exclusiveEnd?: number;
    /**
     * The timestamp of first datapoint to delete.
     */
    inclusiveBegin: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
