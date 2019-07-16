/*!
 * Copyright 2019 Cognite AS
 */

export interface ExternalIdsAlreadyExistResponse {
  /**
   * Error details
   */
  error: ExternalIdsAlreadyExistResponseError;
}

/**
 * Error details
 */
export interface ExternalIdsAlreadyExistResponseError {
  /**
   * HTTP status code
   */
  code: number;
  /**
   * Items that are duplicated.
   */
  duplicated: ExternalIdsAlreadyExistResponseDuplicated[];
  /**
   * Error message
   */
  message: string;
}

/**
 * ExternalIds that already exist.
 */
export interface ExternalIdsAlreadyExistResponseDuplicated {
  /**
   * The external ID provided by the client. Must be unique within the project.
   */
  externalId: string;
}
