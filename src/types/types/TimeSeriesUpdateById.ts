/**
 * Changes will be applied to time series.
 */
export interface TimeSeriesUpdateByID {
    update: Update;
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id: number;
}

export interface Update {
    /**
     * The change that will be applied to the key.
     */
    assetId?: AssetID;
    /**
     * The change that will be applied to the key.
     */
    description?: Description;
    /**
     * The change that will be applied to the key.
     */
    externalId?: ExternalID;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: Metadata;
    /**
     * The change that will be applied to the key.
     */
    name?: Name;
    /**
     * Change that will be applied to the array object.
     */
    securityCategories?: SecurityCategories;
    /**
     * The change that will be applied to the key.
     */
    unit?: Unit;
}

/**
 * The change that will be applied to the key.
 */
export interface AssetID {
    set?:     number;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface Description {
    set?:     string;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
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
 * The change that will be applied to the key.
 */
export interface Name {
    set?:     string;
    setNull?: boolean;
}

/**
 * Change that will be applied to the array object.
 */
export interface SecurityCategories {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * The change that will be applied to the key.
 */
export interface Unit {
    set?:     string;
    setNull?: boolean;
}
