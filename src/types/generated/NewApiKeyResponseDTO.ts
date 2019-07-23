/*!
 * Copyright 2019 Cognite AS
 */

export interface NewApiKeyResponseDTO {
  /**
   * The time of creation in Unix milliseconds.
   */
  createdTime: Date;
  /**
   * The internal ID for the API key.
   */
  id: number;
  /**
   * The ID of the service account.
   */
  serviceAccountId: number;
  /**
   * The status of the API key.
   */
  status: NewApiKeyResponseDTOStatus;
  /**
   * The API key to be used against the API.
   */
  value: string;
}

/**
 * The status of the API key.
 */
export enum NewApiKeyResponseDTOStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}
