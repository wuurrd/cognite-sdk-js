export interface TimeSeriesUpdateRequest {
    items: TimeSeriesUpdateRequestItem[];
}

/**
 * Changes will be applied to time series.
 */
export interface TimeSeriesUpdateRequestItem {
    update: TimeSeriesUpdateRequestUpdate;
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}

export interface TimeSeriesUpdateRequestUpdate {
    /**
     * The change that will be applied to the key.
     */
    assetId?: TimeSeriesUpdateRequestAssetId;
    /**
     * The change that will be applied to the key.
     */
    description?: TimeSeriesUpdateRequestDescription;
    /**
     * The change that will be applied to the key.
     */
    externalId?: TimeSeriesUpdateRequestExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: TimeSeriesUpdateRequestMetadata;
    /**
     * The change that will be applied to the key.
     */
    name?: TimeSeriesUpdateRequestName;
    /**
     * Change that will be applied to the array object.
     */
    securityCategories?: TimeSeriesUpdateRequestSecurityCategories;
    /**
     * The change that will be applied to the key.
     */
    unit?: TimeSeriesUpdateRequestUnit;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateRequestAssetId {
    set?:     number;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateRequestDescription {
    set?:     string;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateRequestExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface TimeSeriesUpdateRequestMetadata {
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
export interface TimeSeriesUpdateRequestName {
    set?:     string;
    setNull?: boolean;
}

/**
 * Change that will be applied to the array object.
 */
export interface TimeSeriesUpdateRequestSecurityCategories {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateRequestUnit {
    set?:     string;
    setNull?: boolean;
}
