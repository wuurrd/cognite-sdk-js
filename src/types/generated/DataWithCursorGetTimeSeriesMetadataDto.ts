/*!
 * Copyright 2019 Cognite AS
 */

/**
 * A list of objects along with possible cursors to get the next page of result
 */
export interface DataWithCursorGetTimeSeriesMetadataDTO {
  items: DataWithCursorGetTimeSeriesMetadataDTOItem[];
  /**
   * The cursor to get the next page of results (if available).
   */
  nextCursor?: string;
}

export interface DataWithCursorGetTimeSeriesMetadataDTOItem {
  /**
   * The asset that this time series belongs to.
   */
  assetId?: number;
  /**
   * Time when this time series was created in CDF in milliseconds since Jan 1, 1970.
   */
  createdTime: number;
  /**
   * Description of the time series.
   */
  description?: string;
  /**
   * The externally supplied ID for the time series.
   */
  externalId?: string;
  /**
   * The generated ID for the time series.
   */
  id: number;
  /**
   * Whether the time series is a step series or not.
   */
  isStep: boolean;
  /**
   * Whether the time series is string valued or not.
   */
  isString: boolean;
  /**
   * The latest time when this time series was updated in CDF in milliseconds since Jan 1,
   * 1970.
   */
  lastUpdatedTime: number;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * The name of the time series.
   */
  name?: string;
  /**
   * The required security categories to access this time series.
   */
  securityCategories?: number[];
  /**
   * The physical unit of the time series.
   */
  unit?: string;
}
