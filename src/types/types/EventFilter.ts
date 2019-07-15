/**
 * Filter on events filter with exact match
 */
export interface EventFilter {
    /**
     * Asset IDs of related equipment that this event relates to.
     */
    assetIds?: number[];
    /**
     * Range between two timestamps.
     */
    createdTime?: CreatedTime;
    /**
     * Range between two timestamps.
     */
    endTime?: EndTime;
    /**
     * External Id provided by client. Should be unique within the project
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
     * The IDs of the root assets that the related assets should be children of.
     */
    rootAssetIds?: RootAssetID[];
    /**
     * The source of this event.
     */
    source?: string;
    /**
     * Range between two timestamps.
     */
    startTime?: StartTime;
    /**
     * The event subtype
     */
    subtype?: string;
    /**
     * The event type
     */
    type?: string;
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
export interface EndTime {
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

export interface RootAssetID {
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
 * Range between two timestamps.
 */
export interface StartTime {
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
