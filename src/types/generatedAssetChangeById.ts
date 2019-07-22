/**
 * Changes applied to asset
 */
export interface AssetChangeById {
    update: AssetChangeByIdUpdate;
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id: number;
}

export interface AssetChangeByIdUpdate {
    /**
     * Removable string change.
     */
    description?: AssetChangeByIdDescription;
    /**
     * Removable string change.
     */
    externalId?: AssetChangeByIdExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: AssetChangeByIdMetadata;
    /**
     * Non-removable string change.
     */
    name?: AssetChangeByIdName;
    /**
     * Removable string change.
     */
    source?: AssetChangeByIdSource;
}

/**
 * Removable string change.
 */
export interface AssetChangeByIdDescription {
    set?:     string;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface AssetChangeByIdExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface AssetChangeByIdMetadata {
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
 * Non-removable string change.
 */
export interface AssetChangeByIdName {
    set: string;
}

/**
 * Removable string change.
 */
export interface AssetChangeByIdSource {
    set?:     string;
    setNull?: boolean;
}
