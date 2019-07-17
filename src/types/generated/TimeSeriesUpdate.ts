/**
 * Changes will be applied to time series.
 */
export interface TimeSeriesUpdate {
    update: TimeSeriesUpdateUpdate;
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}

export interface TimeSeriesUpdateUpdate {
    /**
     * The change that will be applied to the key.
     */
    assetId?: TimeSeriesUpdateAssetId;
    /**
     * The change that will be applied to the key.
     */
    description?: TimeSeriesUpdateDescription;
    /**
     * The change that will be applied to the key.
     */
    externalId?: TimeSeriesUpdateExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: TimeSeriesUpdateMetadata;
    /**
     * The change that will be applied to the key.
     */
    name?: TimeSeriesUpdateName;
    /**
     * Change that will be applied to the array object.
     */
    securityCategories?: TimeSeriesUpdateSecurityCategories;
    /**
     * The change that will be applied to the key.
     */
    unit?: TimeSeriesUpdateUnit;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateAssetId {
    set?:     number;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateDescription {
    set?:     string;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface TimeSeriesUpdateMetadata {
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
export interface TimeSeriesUpdateName {
    set?:     string;
    setNull?: boolean;
}

/**
 * Change that will be applied to the array object.
 */
export interface TimeSeriesUpdateSecurityCategories {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateUnit {
    set?:     string;
    setNull?: boolean;
}
