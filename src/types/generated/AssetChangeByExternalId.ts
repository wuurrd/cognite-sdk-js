/**
 * Changes applied to asset
 */
export interface AssetChangeByExternalId {
    update: AssetChangeByExternalIdUpdate;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId: string;
}

export interface AssetChangeByExternalIdUpdate {
    /**
     * Removable string change.
     */
    description?: AssetChangeByExternalIdDescription;
    /**
     * Removable string change.
     */
    externalId?: AssetChangeByExternalIdExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: AssetChangeByExternalIdMetadata;
    /**
     * Non-removable string change.
     */
    name?: AssetChangeByExternalIdName;
    /**
     * Removable string change.
     */
    source?: AssetChangeByExternalIdSource;
}

/**
 * Removable string change.
 */
export interface AssetChangeByExternalIdDescription {
    set?:     string;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface AssetChangeByExternalIdExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface AssetChangeByExternalIdMetadata {
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
export interface AssetChangeByExternalIdName {
    set: string;
}

/**
 * Removable string change.
 */
export interface AssetChangeByExternalIdSource {
    set?:     string;
    setNull?: boolean;
}
