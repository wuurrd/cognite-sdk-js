/*!
 * Copyright 2019 Cognite AS
 */

/**
 * The file ID of the data file for this resource, with multiple versions supported. Use
 * /3d/files/{id} to retrieve the file.
 */
export interface Versioned3DFile {
  /**
   * File ID. Use /3d/files/{id} to retrieve the file.
   */
  fileId: number;
  /**
   * Version of the file format.
   */
  version: number;
}
