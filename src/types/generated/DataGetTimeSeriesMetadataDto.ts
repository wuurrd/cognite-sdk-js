/**
 * List of responses. The order matches the requests order.
 */
export interface DataGetTimeSeriesMetadataDTO {
    items: DataGetTimeSeriesMetadataDTOItem[];
}

export interface DataGetTimeSeriesMetadataDTOItem {
    /**
     * The asset that this time series belongs to.
     */
    assetId?: number;
    /**
     * Time when this time series was created in CDF in milliseconds since Jan 1, 1970.
     */
    createdTime: Date;
    /**
     * Description of the time series.
     */
    description?: string;
    /**
     * The externally supplied ID for the time series.
     */
    externalId?: string;
    /**
     * The generated ID for the time series.
     */
    id: number;
    /**
     * Whether the time series is a step series or not.
     */
    isStep: boolean;
    /**
     * Whether the time series is string valued or not.
     */
    isString: boolean;
    /**
     * The latest time when this time series was updated in CDF in milliseconds since Jan 1,
     * 1970.
     */
    lastUpdatedTime: Date;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: { [key: string]: string };
    /**
     * The name of the time series.
     */
    name?: string;
    /**
     * The required security categories to access this time series.
     */
    securityCategories?: number[];
    /**
     * The physical unit of the time series.
     */
    unit?: string;
}
