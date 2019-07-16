/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes will be applied to event.
 */
export interface EventChangeByID {
  update: EventChangeByIdUpdate;
  /**
   * Javascript friendly internal ID given to the object.
   */
  id: number;
}

export interface EventChangeByIdUpdate {
  /**
   * Change that will be applied to the array object.
   */
  assetIds?: EventChangeByIdAssetIDS;
  /**
   * Removable string change.
   */
  description?: EventChangeByIdDescription;
  endTime?: EventChangeByIdEndTime;
  /**
   * Removable string change.
   */
  externalId?: EventChangeByIdExternalID;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: EventChangeByIdMetadata;
  /**
   * Removable string change.
   */
  source?: EventChangeByIdSource;
  startTime?: EventChangeByIdStartTime;
  /**
   * Removable string change.
   */
  subtype?: EventChangeByIdSubtype;
  /**
   * Removable string change.
   */
  type?: EventChangeByIdType;
}

/**
 * Change that will be applied to the array object.
 */
export interface EventChangeByIdAssetIDS {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * Removable string change.
 */
export interface EventChangeByIdDescription {
  set?: string;
  setNull?: boolean;
}

export interface EventChangeByIdEndTime {
  set?: number;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeByIdExternalID {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface EventChangeByIdMetadata {
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
export interface EventChangeByIdSource {
  set?: string;
  setNull?: boolean;
}

export interface EventChangeByIdStartTime {
  set?: number;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeByIdSubtype {
  set?: string;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeByIdType {
  set?: string;
  setNull?: boolean;
}
