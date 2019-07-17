/**
 * Changes will be applied to event.
 */
export interface EventChangeByExternalId {
    update: EventChangeByExternalIdUpdate;
    /**
     * External Id provided by client. Should be unique within the project
     */
    externalId: string;
}

export interface EventChangeByExternalIdUpdate {
    /**
     * Change that will be applied to the array object.
     */
    assetIds?: EventChangeByExternalIdAssetIds;
    /**
     * Removable string change.
     */
    description?: EventChangeByExternalIdDescription;
    endTime?: EventChangeByExternalIdEndTime;
    /**
     * Removable string change.
     */
    externalId?: EventChangeByExternalIdExternalId;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: EventChangeByExternalIdMetadata;
    /**
     * Removable string change.
     */
    source?: EventChangeByExternalIdSource;
    startTime?: EventChangeByExternalIdStartTime;
    /**
     * Removable string change.
     */
    subtype?: EventChangeByExternalIdSubtype;
    /**
     * Removable string change.
     */
    type?: EventChangeByExternalIdType;
}

/**
 * Change that will be applied to the array object.
 */
export interface EventChangeByExternalIdAssetIds {
    set?:    number[];
    add?:    number[];
    remove?: number[];
}

/**
 * Removable string change.
 */
export interface EventChangeByExternalIdDescription {
    set?:     string;
    setNull?: boolean;
}

export interface EventChangeByExternalIdEndTime {
    set?:     number;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeByExternalIdExternalId {
    set?:     string;
    setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface EventChangeByExternalIdMetadata {
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
export interface EventChangeByExternalIdSource {
    set?:     string;
    setNull?: boolean;
}

export interface EventChangeByExternalIdStartTime {
    set?:     number;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeByExternalIdSubtype {
    set?:     string;
    setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeByExternalIdType {
    set?:     string;
    setNull?: boolean;
}
