export interface PostTimeSeriesMetadataDTO {
    /**
     * The asset that this time series belongs to.
     */
    assetId?: number;
    /**
     * A description of the time series.
     */
    description?: string;
    /**
     * Externally provided ID for the time series (optional, but recommended.)
     */
    externalId?: string;
    /**
     * Whether the time series is a step series or not.
     */
    isStep?: boolean;
    /**
     * Whether the time series is string valued or not.
     */
    isString?: boolean;
    /**
     * Set a value for legacyName to allow applications using API v0.3, v04, v05, and v0.6 to
     * access this time series. The legacy name is the human-readable name for the time series
     * and is mapped to the name field used in API versions 0.3-0.6. The legacyName field value
     * must be unique, and setting this value to an already existing value will return an error.
     * We recommend that you set this field to the same value as externalId.
     */
    legacyName?: string;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: { [key: string]: string };
    /**
     * Human readable name of the time series
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
