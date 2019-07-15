export type DatapointsMetadata = any[] | boolean | number | number | null | DatapointsMetadataObject | string;

export interface DatapointsMetadataObject {
    /**
     * The external ID of the time series the datapoints belong to.
     */
    externalId?: string;
    /**
     * The ID of the time series the datapoints belong to.
     */
    id: number;
}
