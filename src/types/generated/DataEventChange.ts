/*!
 * Copyright 2019 Cognite AS
 */

export interface DataEventChange {
  items: DataEventChangeItem[];
}

/**
 * Changes will be applied to event.
 */
export interface DataEventChangeItem {
  update: DataEventChangeUpdate;
  /**
   * Javascript friendly internal ID given to the object.
   */
  id?: number;
  /**
   * External Id provided by client. Should be unique within the project
   */
  externalId?: string;
}

export interface DataEventChangeUpdate {
  /**
   * Change that will be applied to the array object.
   */
  assetIds?: DataEventChangeAssetIDS;
  /**
   * Removable string change.
   */
  description?: DataEventChangeDescription;
  endTime?: DataEventChangeEndTime;
  /**
   * Removable string change.
   */
  externalId?: DataEventChangeExternalID;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: DataEventChangeMetadata;
  /**
   * Removable string change.
   */
  source?: DataEventChangeSource;
  startTime?: DataEventChangeStartTime;
  /**
   * Removable string change.
   */
  subtype?: DataEventChangeSubtype;
  /**
   * Removable string change.
   */
  type?: DataEventChangeType;
}

/**
 * Change that will be applied to the array object.
 */
export interface DataEventChangeAssetIDS {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * Removable string change.
 */
export interface DataEventChangeDescription {
  set?: string;
  setNull?: boolean;
}

export interface DataEventChangeEndTime {
  set?: number;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface DataEventChangeExternalID {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface DataEventChangeMetadata {
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
export interface DataEventChangeSource {
  set?: string;
  setNull?: boolean;
}

export interface DataEventChangeStartTime {
  set?: number;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface DataEventChangeSubtype {
  set?: string;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface DataEventChangeType {
  set?: string;
  setNull?: boolean;
}
