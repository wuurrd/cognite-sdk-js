/*!
 * Copyright 2019 Cognite AS
 */

/**
 * A list of objects along with possible cursors to get the next or previous page of results.
 */
export interface DataWithCursorAsset {
  items: DataWithCursorAssetItem[];
  /**
   * The cursor to get the next page of results (if available).
   */
  nextCursor?: string;
}

/**
 * A representation of a physical asset, for example a factory or a piece of equipment.
 */
export interface DataWithCursorAssetItem {
  /**
   * The description of the asset.
   */
  description?: string;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * The name of the asset.
   */
  name: string;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  parentId?: number;
  /**
   * The source of the asset.
   */
  source?: string;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id: number;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  createdTime: Date;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  lastUpdatedTime: Date;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  rootId: number;
}
