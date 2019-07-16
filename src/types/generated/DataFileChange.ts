/*!
 * Copyright 2019 Cognite AS
 */

export interface DataFileChange {
  items: DataFileChangeItem[];
}

/**
 * Changes will be applied to file.
 */
export interface DataFileChangeItem {
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id?: number;
  update: DataFileChangeUpdate;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
}

export interface DataFileChangeUpdate {
  /**
   * Change that will be applied to the array object.
   */
  assetIds?: DataFileChangeAssetIds;
  /**
   * Removable string change.
   */
  externalId?: DataFileChangeExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: DataFileChangeMetadata;
  /**
   * Removable string change.
   */
  source?: DataFileChangeSource;
}

/**
 * Change that will be applied to the array object.
 */
export interface DataFileChangeAssetIds {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * Removable string change.
 */
export interface DataFileChangeExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface DataFileChangeMetadata {
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
export interface DataFileChangeSource {
  set?: string;
  setNull?: boolean;
}
