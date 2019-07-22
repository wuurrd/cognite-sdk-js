/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes applied to asset
 */
export interface AssetPatch {
  update: AssetPatchUpdate;
}

export interface AssetPatchUpdate {
  /**
   * Removable string change.
   */
  description?: AssetPatchDescription;
  /**
   * Removable string change.
   */
  externalId?: AssetPatchExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: AssetPatchMetadata;
  /**
   * Non-removable string change.
   */
  name?: AssetPatchName;
  /**
   * Removable string change.
   */
  source?: AssetPatchSource;
}

/**
 * Removable string change.
 */
export interface AssetPatchDescription {
  set?: string;
  setNull?: boolean;
}

/**
 * Removable string change.
 */
export interface AssetPatchExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface AssetPatchMetadata {
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
export interface AssetPatchName {
  set: string;
}

/**
 * Removable string change.
 */
export interface AssetPatchSource {
  set?: string;
  setNull?: boolean;
}
