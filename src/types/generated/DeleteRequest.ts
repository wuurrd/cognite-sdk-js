/*!
 * Copyright 2019 Cognite AS
 */

export interface DeleteRequest {
  items: DeleteRequestItem[];
  /**
   * Recursively delete whole asset subtrees under given ids
   */
  recursive?: boolean;
}

export interface DeleteRequestItem {
  /**
   * A JavaScript-friendly internal ID for the object.
   */
  id?: number;
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId?: string;
}
