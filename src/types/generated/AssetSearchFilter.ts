/**
 * Search request with filter capabilities.
 */
export interface AssetSearchFilter {
    /**
     * Filter on assets with strict matching.
     */
    filter?: AssetSearchFilterFilter;
    /**
     * <- Limits the maximum number of results to be returned by a single request. If there are
     * more results to the request, the 'nextCursor' attribute is provided as part of response.
     * The request may contain fewer results than the request limit.
     */
    limit?: number;
    /**
     * Search will return fuzzy matches for the fields you provide.
     */
    search?: AssetSearchFilterSearch;
}

/**
 * Filter on assets with strict matching.
 */
export interface AssetSearchFilterFilter {
    /**
     * Range between two timestamps.
     */
    createdTime?: AssetSearchFilterCreatedTime;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalIdPrefix?: string;
    /**
     * Range between two timestamps.
     */
    lastUpdatedTime?: AssetSearchFilterLastUpdatedTime;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: { [key: string]: string };
    /**
     * The name of the asset.
     */
    name?:      string;
    parentIds?: number[];
    /**
     * Whether the filtered assets are root assets, or not.
     */
    root?:    boolean;
    rootIds?: AssetSearchFilterRootId[];
    /**
     * The source of the asset.
     */
    source?: string;
}

/**
 * Range between two timestamps.
 */
export interface AssetSearchFilterCreatedTime {
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
 * Range between two timestamps.
 */
export interface AssetSearchFilterLastUpdatedTime {
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

export interface AssetSearchFilterRootId {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}

/**
 * Search will return fuzzy matches for the fields you provide.
 */
export interface AssetSearchFilterSearch {
    /**
     * The description of the asset.
     */
    description?: string;
    /**
     * The name of the asset.
     */
    name?: string;
}
