export interface AssetFilter {
    /**
     * Filter on assets with strict matching.
     */
    filter?: Filter;
    /**
     * <- Limits the maximum number of results to be returned by a single request. If there are
     * more results to the request, the 'nextCursor' attribute is provided as part of response.
     * The request may contain fewer results than the request limit.
     */
    limit?: number;
}

/**
 * Filter on assets with strict matching.
 */
export interface Filter {
    /**
     * Range between two timestamps.
     */
    createdTime?: CreatedTime;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalIdPrefix?: string;
    /**
     * Range between two timestamps.
     */
    lastUpdatedTime?: LastUpdatedTime;
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
    rootIds?: RootID[];
    /**
     * The source of the asset.
     */
    source?: string;
}

/**
 * Range between two timestamps.
 */
export interface CreatedTime {
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    max?: number;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    min?: number;
}

/**
 * Range between two timestamps.
 */
export interface LastUpdatedTime {
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    max?: number;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    min?: number;
}

export interface RootID {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
