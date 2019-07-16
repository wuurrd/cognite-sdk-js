/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes will be applied to event.
 */
export interface EventChange {
  update: EventChangeUpdate;
  /**
   * Javascript friendly internal ID given to the object.
   */
  id?: number;
  /**
   * External Id provided by client. Should be unique within the project
   */
  externalId?: string;
}

export interface EventChangeUpdate {
  /**
   * Change that will be applied to the array object.
   */
  assetIds?: EventChangeAssetIDS;
  /**
   * Removable string change.
   */
  description?: EventChangeDescription;
  endTime?: EventChangeEndTime;
  /**
   * Removable string change.
   */
  externalId?: EventChangeExternalID;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: EventChangeMetadata;
  /**
   * Removable string change.
   */
  source?: EventChangeSource;
  startTime?: EventChangeStartTime;
  /**
   * Removable string change.
   */
  subtype?: EventChangeSubtype;
  /**
   * Removable string change.
   */
  type?: EventChangeType;
}

/**
 * Change that will be applied to the array object.
 */
export interface EventChangeAssetIDS {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * Removable string change.
 */
export interface EventChangeDescription {
  set?: string;
  setNull?: boolean;
}

export interface EventChangeEndTime {
  set?: number;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeExternalID {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface EventChangeMetadata {
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
export interface EventChangeSource {
  set?: string;
  setNull?: boolean;
}

export interface EventChangeStartTime {
  set?: number;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeSubtype {
  set?: string;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface EventChangeType {
  set?: string;
  setNull?: boolean;
}
