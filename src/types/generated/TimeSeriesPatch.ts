/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes will be applied to time series.
 */
export interface TimeSeriesPatch {
  update: TimeSeriesPatchUpdate;
}

export interface TimeSeriesPatchUpdate {
  /**
   * The change that will be applied to the key.
   */
  assetId?: TimeSeriesPatchAssetId;
  /**
   * The change that will be applied to the key.
   */
  description?: TimeSeriesPatchDescription;
  /**
   * The change that will be applied to the key.
   */
  externalId?: TimeSeriesPatchExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: TimeSeriesPatchMetadata;
  /**
   * The change that will be applied to the key.
   */
  name?: TimeSeriesPatchName;
  /**
   * Change that will be applied to the array object.
   */
  securityCategories?: TimeSeriesPatchSecurityCategories;
  /**
   * The change that will be applied to the key.
   */
  unit?: TimeSeriesPatchUnit;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesPatchAssetId {
  set?: number;
  setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesPatchDescription {
  set?: string;
  setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesPatchExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface TimeSeriesPatchMetadata {
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
 * The change that will be applied to the key.
 */
export interface TimeSeriesPatchName {
  set?: string;
  setNull?: boolean;
}

/**
 * Change that will be applied to the array object.
 */
export interface TimeSeriesPatchSecurityCategories {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesPatchUnit {
  set?: string;
  setNull?: boolean;
}
