/*!
 * Copyright 2019 Cognite AS
 */

export interface FilesMetadata {
  assetIds?: number[];
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
   * File type. E.g. text/plain, application/pdf, ..
   */
  mimeType?: string;
  /**
   * Name of the file.
   */
  name: string;
  /**
   * The source of the file.
   */
  source?: string;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  createdTime: number;
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id: number;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  lastUpdatedTime: number;
  /**
   * Whether or not the actual file is uploaded.  This field is returned only by the API, it
   * has no effect in a post body.
   */
  uploaded: boolean;
  /**
   * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
   * Time (UTC), minus leap seconds.
   */
  uploadedTime?: number;
}
