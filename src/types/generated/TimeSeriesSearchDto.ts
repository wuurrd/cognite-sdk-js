export interface TimeSeriesSearchDTO {
    /**
     * Filtering parameters
     */
    filter?: TimeSeriesSearchDTOFilter;
    /**
     * Return up to this many results.
     */
    limit?: number;
    /**
     * Search parameters
     */
    search?: TimeSeriesSearchDTOSearch;
}

/**
 * Filtering parameters
 */
export interface TimeSeriesSearchDTOFilter {
    /**
     * Filter out time series that are not linked to any of these assets.
     */
    assetIds?: number[];
    /**
     * Filter out time series with createdTime outside this range.
     */
    createdTime?: TimeSeriesSearchDTOCreatedTime;
    /**
     * Prefix filter on externalId. (case-sensitive)
     */
    externalIdPrefix?: string;
    /**
     * Filter on isStep.
     */
    isStep?: boolean;
    /**
     * Filter on isString.
     */
    isString?: boolean;
    /**
     * Filter out time series with lastUpdatedTime outside this range.
     */
    lastUpdatedTime?: TimeSeriesSearchDTOLastUpdatedTime;
    /**
     * Filter out timeseries that do not match these metadata fields and values
     * (case-sensitive). The format is {"key1":"value1","key2":"value2"}.
     */
    metadata?: { [key: string]: string };
    /**
     * Filter on name.
     */
    name?: string;
    /**
     * The IDs of the root assets that the related assets should be children of.
     */
    rootAssetIds?: number[];
    /**
     * Filter on unit.
     */
    unit?: string;
}

/**
 * Filter out time series with createdTime outside this range.
 */
export interface TimeSeriesSearchDTOCreatedTime {
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
       max?: Date;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
       min?: Date;
}

/**
 * Filter out time series with lastUpdatedTime outside this range.
 */
export interface TimeSeriesSearchDTOLastUpdatedTime {
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
       max?: Date;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
       min?: Date;
}

/**
 * Search parameters
 */
export interface TimeSeriesSearchDTOSearch {
    /**
     * Prefix and fuzzy search on description.
     */
    description?: string;
    /**
     * Prefix and fuzzy search on name.
     */
    name?: string;
    /**
     * Search on name and description using wildcard search on each
     * of the words (separated by spaces). Retrieves results where at least one word match.
     */
    query?: string;
}
