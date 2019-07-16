/*!
 * Copyright 2019 Cognite AS
 */

export interface NewAPIKeyResponseDto {
  /**
   * The time of creation in Unix milliseconds.
   */
  createdTime: number;
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
  status: NewApiKeyResponseDtoStatus;
  /**
   * The API key to be used against the API.
   */
  value: string;
}

/**
 * The status of the API key.
 */
export enum NewApiKeyResponseDtoStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
}
