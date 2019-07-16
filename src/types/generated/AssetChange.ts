/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes applied to asset
 */
export interface AssetChange {
  update: AssetChangeUpdate;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id?: number;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
}

export interface AssetChangeUpdate {
  /**
   * Removable string change.
   */
  description?: AssetChangeDescription;
  /**
   * Removable string change.
   */
  externalId?: AssetChangeExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: AssetChangeMetadata;
  /**
   * Non-removable string change.
   */
  name?: AssetChangeName;
  /**
   * Removable string change.
   */
  source?: AssetChangeSource;
}

/**
 * Removable string change.
 */
export interface AssetChangeDescription {
  set?: string;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface AssetChangeExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface AssetChangeMetadata {
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
export interface AssetChangeName {
  set: string;
}

/**
 * Removable string change.
 */
export interface AssetChangeSource {
  set?: string;
  setNull?: boolean;
}
