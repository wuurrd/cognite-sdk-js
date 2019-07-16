/*!
 * Copyright 2019 Cognite AS
 */

export interface SingleTokenStatusDtoResponse {
  data: SingleTokenStatusDtoResponseData;
}

export interface SingleTokenStatusDtoResponseData {
  /**
   * Whether this token has expired
   */
  expired: boolean;
  /**
   * The token that was sent for validation
   */
  token: string;
  /**
   * Whether this token is valid
   */
  valid: boolean;
}
