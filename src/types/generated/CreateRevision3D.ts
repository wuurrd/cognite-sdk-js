/*!
 * Copyright 2019 Cognite AS
 */

export interface CreateRevision3D {
  /**
   * Initial camera position and target.
   */
  camera?: CreateRevision3DCamera;
  /**
   * The file id to a file uploaded to Cognite's Files API. Can only be set on revision
   * creation, and can never be updated.
   */
  fileId: number;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * True if the revision is marked as published.
   */
  published?: boolean;
  rotation?: number[];
}

/**
 * Initial camera position and target.
 */
export interface CreateRevision3DCamera {
  /**
   * Initial camera position.
   */
  position?: number[];
  /**
   * Initial camera target.
   */
  target?: number[];
}
