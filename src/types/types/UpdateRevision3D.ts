export interface UpdateRevision3D {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id:      number;
    update?: Update;
}

export interface Update {
    camera?: Camera;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?:  Metadata;
    published?: Published;
    rotation?:  Rotation;
}

export interface Camera {
    /**
     * Initial camera position and target.
     */
    set?: Set;
}

/**
 * Initial camera position and target.
 */
export interface Set {
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

export interface Published {
    /**
     * True if the revision is marked as published.
     */
    set?: boolean;
}

export interface Rotation {
    set?: number[];
}
