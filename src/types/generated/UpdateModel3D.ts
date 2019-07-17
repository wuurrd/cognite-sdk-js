export interface UpdateModel3D {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id:      number;
    update?: UpdateModel3DUpdate;
}

export interface UpdateModel3DUpdate {
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: UpdateModel3DMetadata;
    name?: UpdateModel3DName;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface UpdateModel3DMetadata {
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

export interface UpdateModel3DName {
    set?: string;
}
