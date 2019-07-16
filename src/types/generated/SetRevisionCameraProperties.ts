/*!
 * Copyright 2019 Cognite AS
 */

export interface SetRevisionCameraProperties {
  /**
   * Initial camera position and target.
   */
  set?: SetRevisionCameraPropertiesSet;
}

/**
 * Initial camera position and target.
 */
export interface SetRevisionCameraPropertiesSet {
  /**
   * Initial camera position.
   */
  position?: number[];
  /**
   * Initial camera target.
   */
  target?: number[];
}
