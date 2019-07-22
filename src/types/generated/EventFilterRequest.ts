/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Filter request for events. Filters exact field matching or timestamp ranges inclusive min
 * and max.
 *
 * Cursor for paging through results.
 */
export interface EventFilterRequest {
  /**
   * Filter on events filter with exact match
   */
  filter?: EventFilterRequestFilter;
  /**
   * <- Limits the maximum number of results to be returned by single request. In case there
   * are more results to the request 'nextCursor' attribute will be provided as part of
   * response. Request may contain less results than request limit.
   */
  limit?: number;
  cursor?: string;
}

/**
 * Filter on events filter with exact match
 */
export interface EventFilterRequestFilter {
  /**
   * Asset IDs of related equipment that this event relates to.
   */
  assetIds?: number[];
  /**
   * Range between two timestamps.
   */
  createdTime?: EventFilterRequestCreatedTime;
  /**
   * Range between two timestamps.
   */
  endTime?: EventFilterRequestEndTime;
  /**
   * External Id provided by client. Should be unique within the project
   */
  externalIdPrefix?: string;
  /**
   * Range between two timestamps.
   */
  lastUpdatedTime?: EventFilterRequestLastUpdatedTime;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * The IDs of the root assets that the related assets should be children of.
   */
  rootAssetIds?: EventFilterRequestRootAssetId[];
  /**
   * The source of this event.
   */
  source?: string;
  /**
   * Range between two timestamps.
   */
  startTime?: EventFilterRequestStartTime;
  /**
   * The event subtype
   */
  subtype?: string;
  /**
   * The event type
   */
  type?: string;
}

/**
 * Range between two timestamps.
 */
export interface EventFilterRequestCreatedTime {
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
export interface EventFilterRequestEndTime {
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  max?: number;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  min?: number;
}

/**
 * Range between two timestamps.
 */
export interface EventFilterRequestLastUpdatedTime {
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

export interface EventFilterRequestRootAssetId {
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id?: number;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
}

/**
 * Range between two timestamps.
 */
export interface EventFilterRequestStartTime {
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  max?: number;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  min?: number;
}
