/**
 * Cursor for paging through results.
 */
export interface AssetListScope {
    /**
     * Filter on assets with strict matching.
     */
    filter?: AssetListScopeFilter;
    /**
     * <- Limits the maximum number of results to be returned by a single request. If there are
     * more results to the request, the 'nextCursor' attribute is provided as part of response.
     * The request may contain fewer results than the request limit.
     */
    limit?:  number;
    cursor?: string;
}

/**
 * Filter on assets with strict matching.
 */
export interface AssetListScopeFilter {
    /**
     * Range between two timestamps.
     */
    createdTime?: AssetListScopeCreatedTime;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalIdPrefix?: string;
    /**
     * Range between two timestamps.
     */
    lastUpdatedTime?: AssetListScopeLastUpdatedTime;
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
    rootIds?: AssetListScopeRootId[];
    /**
     * The source of the asset.
     */
    source?: string;
}

/**
 * Range between two timestamps.
 */
export interface AssetListScopeCreatedTime {
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
export interface AssetListScopeLastUpdatedTime {
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

export interface AssetListScopeRootId {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
