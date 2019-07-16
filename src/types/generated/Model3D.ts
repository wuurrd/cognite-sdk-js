/*!
 * Copyright 2019 Cognite AS
 */

export interface Model3D {
  /**
   * The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC.
   */
  createdTime: number;
  /**
   * The ID of the model.
   */
  id: number;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * The name of the model.
   */
  name: string;
}
