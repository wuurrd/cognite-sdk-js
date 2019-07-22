/*!
 * Copyright 2019 Cognite AS
 */

export interface Filter {
  /**
   * Filter out time series that are not linked to any of these assets.
   */
  assetIds?: number[];
  /**
   * Filter out time series with createdTime outside this range.
   */
  createdTime?: FilterCreatedTime;
  /**
   * Prefix filter on externalId. (case-sensitive)
   */
  externalIdPrefix?: string;
  /**
   * Filter on isStep.
   */
  isStep?: boolean;
  /**
   * Filter on isString.
   */
  isString?: boolean;
  /**
   * Filter out time series with lastUpdatedTime outside this range.
   */
  lastUpdatedTime?: FilterLastUpdatedTime;
  /**
   * Filter out timeseries that do not match these metadata fields and values
   * (case-sensitive). The format is {"key1":"value1","key2":"value2"}.
   */
  metadata?: { [key: string]: string };
  /**
   * Filter on name.
   */
  name?: string;
  /**
   * The IDs of the root assets that the related assets should be children of.
   */
  rootAssetIds?: number[];
  /**
   * Filter on unit.
   */
  unit?: string;
}

/**
 * Filter out time series with createdTime outside this range.
 */
export interface FilterCreatedTime {
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
 * Filter out time series with lastUpdatedTime outside this range.
 */
export interface FilterLastUpdatedTime {
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
