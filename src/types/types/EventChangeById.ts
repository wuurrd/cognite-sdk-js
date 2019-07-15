/**
 * Changes will be applied to event.
 */
export interface EventChangeByID {
    update: Update;
    /**
     * Javascript friendly internal ID given to the object.
     */
    id: number;
}

export interface Update {
    /**
     * Change that will be applied to the array object.
     */
    assetIds?: AssetIDS;
    /**
     * Removable string change.
     */
    description?: Description;
    endTime?:     EndTime;
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
     * Removable string change.
     */
    source?:    Source;
    startTime?: StartTime;
    /**
     * Removable string change.
     */
    subtype?: Subtype;
    /**
     * Removable string change.
     */
    type?: Type;
}

/**
 * Change that will be applied to the array object.
 */
export interface AssetIDS {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * Removable string change.
 */
export interface Description {
    set?:     string;
    setNull?: boolean;
}

export interface EndTime {
    set?:     number;
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
 * Removable string change.
 */
export interface Source {
    set?:     string;
    setNull?: boolean;
}

export interface StartTime {
    set?:     number;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface Subtype {
    set?:     string;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface Type {
    set?:     string;
    setNull?: boolean;
}
