/**
 * Changes will be applied to file.
 */
export interface FileChange {
    update: FileChangeObject;
}

export interface FileChangeObject {
    /**
     * Change that will be applied to the array object.
     */
    assetIds?: FileChangeAssetIds;
    /**
     * Removable string change.
     */
    externalId?: FileChangeExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: FileChangeMetadata;
    /**
     * Removable string change.
     */
    source?: FileChangeSource;
}

/**
 * Change that will be applied to the array object.
 */
export interface FileChangeAssetIds {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * Removable string change.
 */
export interface FileChangeExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface FileChangeMetadata {
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
export interface FileChangeSource {
    set?:     string;
    setNull?: boolean;
}
