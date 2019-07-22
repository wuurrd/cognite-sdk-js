/*!
 * Copyright 2019 Cognite AS
 */

export interface ApiKeyResponse {
  items: ApiKeyObject[];
}

export interface ApiKeyObject {
  /**
   * The time of creation in Unix milliseconds.
   */
  createdTime: Date;
  /**
   * The ID of the API key.
   */
  id: number;
  /**
   * The ID of the service account.
   */
  serviceAccountId: number;
  status: ApiKeyResponseStatus;
}

export enum ApiKeyResponseStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}
