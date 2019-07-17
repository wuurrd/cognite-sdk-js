/**
 * Changes will be applied to file.
 */
export interface FileChangeUpdate {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?:    number;
    update: FileChangeUpdateUpdate;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}

export interface FileChangeUpdateUpdate {
    /**
     * Change that will be applied to the array object.
     */
    assetIds?: FileChangeUpdateAssetIds;
    /**
     * Removable string change.
     */
    externalId?: FileChangeUpdateExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: FileChangeUpdateMetadata;
    /**
     * Removable string change.
     */
    source?: FileChangeUpdateSource;
}

/**
 * Change that will be applied to the array object.
 */
export interface FileChangeUpdateAssetIds {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * Removable string change.
 */
export interface FileChangeUpdateExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface FileChangeUpdateMetadata {
    /**
     * Set the key-value pairs. All existing key-value pairs will be removed.
     */
    set?: { [key: string]: string };
    /**
     * Add the key-value pairs. Values for existing keys will be overwritten.
     */
    add?: { [key: string]: string };
    /**
     * Remove the key-value pairs with the specified keys.
     */
    remove?: string[];
}

/**
 * Removable string change.
 */
export interface FileChangeUpdateSource {
    set?:     string;
    setNull?: boolean;
}
