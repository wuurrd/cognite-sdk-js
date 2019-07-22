export interface UpdateRevision3D {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id:      number;
    update?: UpdateRevision3DUpdate;
}

export interface UpdateRevision3DUpdate {
    camera?: UpdateRevision3DCamera;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: UpdateRevision3DMetadata;
    published?: Published;
    rotation?:  Rotation;
}

export interface UpdateRevision3DCamera {
    /**
     * Initial camera position and target.
     */
    set?: UpdateRevision3DSet;
}

/**
 * Initial camera position and target.
 */
export interface UpdateRevision3DSet {
    /**
     * Initial camera position.
     */
    position?: number[];
    /**
     * Initial camera target.
     */
    target?: number[];
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface UpdateRevision3DMetadata {
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

export interface Published {
    /**
     * True if the revision is marked as published.
     */
    set?: boolean;
}

export interface Rotation {
    set?: number[];
}
