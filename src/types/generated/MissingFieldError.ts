/*!
 * Copyright 2019 Cognite AS
 */

export interface MissingFieldError {
  error: MissingFieldErrorError;
}

export interface MissingFieldErrorError {
  /**
   * HTTP status code
   */
  code: number;
  /**
   * Error message
   */
  message: string;
  /**
   * Fields that are missing.
   */
  missingFields: { [key: string]: any }[];
}
