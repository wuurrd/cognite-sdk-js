/*!
 * Copyright 2019 Cognite AS
 */

export interface ServiceAccountInput {
  /**
   * List of group ids
   */
  groups?: number[];
  /**
   * Unique name of the service account
   */
  name: string;
}
