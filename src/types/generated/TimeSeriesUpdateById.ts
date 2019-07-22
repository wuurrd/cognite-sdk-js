/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Changes will be applied to time series.
 */
export interface TimeSeriesUpdateById {
  update: TimeSeriesUpdateByIdUpdate;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id: number;
}

export interface TimeSeriesUpdateByIdUpdate {
  /**
   * The change that will be applied to the key.
   */
  assetId?: TimeSeriesUpdateByIdAssetId;
  /**
   * The change that will be applied to the key.
   */
  description?: TimeSeriesUpdateByIdDescription;
  /**
   * The change that will be applied to the key.
   */
  externalId?: TimeSeriesUpdateByIdExternalId;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: TimeSeriesUpdateByIdMetadata;
  /**
   * The change that will be applied to the key.
   */
  name?: TimeSeriesUpdateByIdName;
  /**
   * Change that will be applied to the array object.
   */
  securityCategories?: TimeSeriesUpdateByIdSecurityCategories;
  /**
   * The change that will be applied to the key.
   */
  unit?: TimeSeriesUpdateByIdUnit;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByIdAssetId {
  set?: number;
  setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByIdDescription {
  set?: string;
  setNull?: boolean;
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByIdExternalId {
  set?: string;
  setNull?: boolean;
}

/**
 * Custom, application specific metadata. String key -> String value. Limits: Maximum length
 * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
 */
export interface TimeSeriesUpdateByIdMetadata {
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
export interface TimeSeriesUpdateByIdName {
  set?: string;
  setNull?: boolean;
}

/**
 * Change that will be applied to the array object.
 */
export interface TimeSeriesUpdateByIdSecurityCategories {
  set?: number[];
  add?: number[];
  remove?: number[];
}

/**
 * The change that will be applied to the key.
 */
export interface TimeSeriesUpdateByIdUnit {
  set?: string;
  setNull?: boolean;
}
