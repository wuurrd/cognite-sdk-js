/**
 * Changes will be applied to event.
 */
export interface EventPatch {
    update: EventPatchUpdate;
}

export interface EventPatchUpdate {
    /**
     * Change that will be applied to the array object.
     */
    assetIds?: EventPatchAssetIds;
    /**
     * Removable string change.
     */
    description?: EventPatchDescription;
    endTime?: EventPatchEndTime;
    /**
     * Removable string change.
     */
    externalId?: EventPatchExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: EventPatchMetadata;
    /**
     * Removable string change.
     */
    source?: EventPatchSource;
    startTime?: EventPatchStartTime;
    /**
     * Removable string change.
     */
    subtype?: EventPatchSubtype;
    /**
     * Removable string change.
     */
    type?: EventPatchType;
}

/**
 * Change that will be applied to the array object.
 */
export interface EventPatchAssetIds {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * Removable string change.
 */
export interface EventPatchDescription {
    set?:     string;
    setNull?: boolean;
}

export interface EventPatchEndTime {
    set?:     number;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventPatchExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface EventPatchMetadata {
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
export interface EventPatchSource {
    set?:     string;
    setNull?: boolean;
}

export interface EventPatchStartTime {
    set?:     number;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventPatchSubtype {
    set?:     string;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventPatchType {
    set?:     string;
    setNull?: boolean;
}
