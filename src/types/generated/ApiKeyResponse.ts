/*!
 * Copyright 2019 Cognite AS
 */

export interface APIKeyResponse {
  items: APIKeyObject[];
}

export interface APIKeyObject {
  /**
   * The time of creation in Unix milliseconds.
   */
  createdTime: number;
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
