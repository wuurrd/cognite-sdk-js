/*!
 * Copyright 2019 Cognite AS
 */

export interface CreateModel3D {
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
