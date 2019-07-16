/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes will be applied to file.
 */
export interface FileChangeUpdateByID {
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id: number;
  update: FileChangeUpdateByIdUpdate;
}

export interface FileChangeUpdateByIdUpdate {
  /**
   * Change that will be applied to the array object.
   */
  assetIds?: FileChangeUpdateByIdAssetIDS;
  /**
   * Removable string change.
   */
  externalId?: FileChangeUpdateByIdExternalID;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: FileChangeUpdateByIdMetadata;
  /**
   * Removable string change.
   */
  source?: FileChangeUpdateByIdSource;
}

/**
 * Change that will be applied to the array object.
 */
export interface FileChangeUpdateByIdAssetIDS {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * Removable string change.
 */
export interface FileChangeUpdateByIdExternalID {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface FileChangeUpdateByIdMetadata {
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
export interface FileChangeUpdateByIdSource {
  set?: string;
  setNull?: boolean;
}
