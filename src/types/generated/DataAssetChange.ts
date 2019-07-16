/*!
 * Copyright 2019 Cognite AS
 */

export interface DataAssetChange {
  items: DataAssetChangeItem[];
}

/**
 * Changes applied to asset
 */
export interface DataAssetChangeItem {
  update: DataAssetChangeUpdate;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id?: number;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
}

export interface DataAssetChangeUpdate {
  /**
   * Removable string change.
   */
  description?: DataAssetChangeDescription;
  /**
   * Removable string change.
   */
  externalId?: DataAssetChangeExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: DataAssetChangeMetadata;
  /**
   * Non-removable string change.
   */
  name?: DataAssetChangeName;
  /**
   * Removable string change.
   */
  source?: DataAssetChangeSource;
}

/**
 * Removable string change.
 */
export interface DataAssetChangeDescription {
  set?: string;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface DataAssetChangeExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface DataAssetChangeMetadata {
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
 * Non-removable string change.
 */
export interface DataAssetChangeName {
  set: string;
}

/**
 * Removable string change.
 */
export interface DataAssetChangeSource {
  set?: string;
  setNull?: boolean;
}
