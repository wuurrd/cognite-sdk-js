/**
 * Filter on files with exact match
 */
export interface FileFilter {
    filter?: Filter;
    /**
     * <- Maximum number of items that the client want to get back.
     */
    limit?: number;
}

export interface Filter {
    /**
     * Only include files that reference these specific asset IDs.
     */
    assetIds?: number[];
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
     * File type. E.g. text/plain, application/pdf, ..
     */
    mimeType?: string;
    /**
     * Name of the file.
     */
    name?: string;
    /**
     * The source of this event.
     */
    source?: string;
    /**
     * Whether or not the actual file is uploaded. This field is returned only by the API, it
     * has no effect in a post body.
     */
    uploaded?: boolean;
    /**
     * Range between two timestamps.
     */
    uploadedTime?: UploadedTime;
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

/**
 * Range between two timestamps.
 */
export interface UploadedTime {
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
