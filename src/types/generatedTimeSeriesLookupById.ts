export interface TimeSeriesLookupById {
    /**
     * List of ID objects
     */
    items: TimeSeriesLookupByIdItem[];
}

export interface TimeSeriesLookupByIdItem {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
