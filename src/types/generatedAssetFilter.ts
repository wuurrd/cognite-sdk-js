/*!
 * Copyright 2019 Cognite AS
 */

export interface AssetFilter {
  /**
   * Filter on assets with strict matching.
   */
  filter?: AssetFilterFilter;
  /**
   * <- Limits the maximum number of results to be returned by a single request. If there are
   * more results to the request, the 'nextCursor' attribute is provided as part of response.
   * The request may contain fewer results than the request limit.
   */
  limit?: number;
}

/**
 * Filter on assets with strict matching.
 */
export interface AssetFilterFilter {
  /**
   * Range between two timestamps.
   */
  createdTime?: AssetFilterCreatedTime;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalIdPrefix?: string;
  /**
   * Range between two timestamps.
   */
  lastUpdatedTime?: AssetFilterLastUpdatedTime;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * The name of the asset.
   */
  name?: string;
  parentIds?: number[];
  /**
   * Whether the filtered assets are root assets, or not.
   */
  root?: boolean;
  rootIds?: AssetFilterRootId[];
  /**
   * The source of the asset.
   */
  source?: string;
}

/**
 * Range between two timestamps.
 */
export interface AssetFilterCreatedTime {
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
   max?: Date;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
   min?: Date;
}

/**
 * Range between two timestamps.
 */
export interface AssetFilterLastUpdatedTime {
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
   max?: Date;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
   min?: Date;
}

export interface AssetFilterRootId {
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id?: number;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
}
