/*!
 * Copyright 2019 Cognite AS
 */

export interface ServiceAccount {
  /**
   * Time of deletion
   */
  deletedTime: Date;
  /**
   * List of group ids
   */
  groups: number[];
  id: number;
  /**
   * If this service account has been logically deleted
   */
  isDeleted: boolean;
  /**
   * Unique name of the service account
   */
  name: string;
}
