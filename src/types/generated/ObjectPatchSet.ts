/*!
 * Copyright 2019 Cognite AS
 */

export interface ObjectPatchSet {
  /**
   * Set the key-value pairs. All existing key-value pairs will be removed.
   */
  set: { [key: string]: string };
}
