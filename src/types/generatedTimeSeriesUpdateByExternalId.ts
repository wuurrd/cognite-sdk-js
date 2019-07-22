/**
 * Changes will be applied to time series.
 */
export interface TimeSeriesUpdateByExternalId {
    update: TimeSeriesUpdateByExternalIdUpdate;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId: string;
}

export interface TimeSeriesUpdateByExternalIdUpdate {
    /**
     * The change that will be applied to the key.
     */
    assetId?: TimeSeriesUpdateByExternalIdAssetId;
    /**
     * The change that will be applied to the key.
     */
    description?: TimeSeriesUpdateByExternalIdDescription;
    /**
     * The change that will be applied to the key.
     */
    externalId?: TimeSeriesUpdateByExternalIdExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: TimeSeriesUpdateByExternalIdMetadata;
    /**
     * The change that will be applied to the key.
     */
    name?: TimeSeriesUpdateByExternalIdName;
    /**
     * Change that will be applied to the array object.
     */
    securityCategories?: TimeSeriesUpdateByExternalIdSecurityCategories;
    /**
     * The change that will be applied to the key.
     */
    unit?: TimeSeriesUpdateByExternalIdUnit;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByExternalIdAssetId {
    set?:     number;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByExternalIdDescription {
    set?:     string;
    setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByExternalIdExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface TimeSeriesUpdateByExternalIdMetadata {
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
export interface TimeSeriesUpdateByExternalIdName {
    set?:     string;
    setNull?: boolean;
}

/**
 * Change that will be applied to the array object.
 */
export interface TimeSeriesUpdateByExternalIdSecurityCategories {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByExternalIdUnit {
    set?:     string;
    setNull?: boolean;
}
