export interface DataAssetChange {
    items: Item[];
}

/**
 * Changes applied to asset
 */
export interface Item {
    update: Update;
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}

export interface Update {
    /**
     * Removable string change.
     */
    description?: Description;
    /**
     * Removable string change.
     */
    externalId?: ExternalID;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: Metadata;
    /**
     * Non-removable string change.
     */
    name?: Name;
    /**
     * Removable string change.
     */
    source?: Source;
}

/**
 * Removable string change.
 */
export interface Description {
    set?:     string;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface ExternalID {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface Metadata {
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
export interface Name {
    set: string;
}

/**
 * Removable string change.
 */
export interface Source {
    set?:     string;
    setNull?: boolean;
}
