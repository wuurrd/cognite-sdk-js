/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes will be applied to file.
 */
export interface FileChangeUpdateByExternalId {
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId: string;
  update: FileChangeUpdateByExternalIdUpdate;
}

export interface FileChangeUpdateByExternalIdUpdate {
  /**
   * Change that will be applied to the array object.
   */
  assetIds?: FileChangeUpdateByExternalIdAssetIds;
  /**
   * Removable string change.
   */
  externalId?: FileChangeUpdateByExternalIdExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: FileChangeUpdateByExternalIdMetadata;
  /**
   * Removable string change.
   */
  source?: FileChangeUpdateByExternalIdSource;
}

/**
 * Change that will be applied to the array object.
 */
export interface FileChangeUpdateByExternalIdAssetIds {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * Removable string change.
 */
export interface FileChangeUpdateByExternalIdExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface FileChangeUpdateByExternalIdMetadata {
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
export interface FileChangeUpdateByExternalIdSource {
  set?: string;
  setNull?: boolean;
}
