/*!
 * Copyright 2019 Cognite AS
 */

export interface LoginUrlResponse {
  /**
   * Represents an url where the user can be redirected to sign in.
   */
  data?: LoginUrlResponseData;
}

/**
 * Represents an url where the user can be redirected to sign in.
 */
export interface LoginUrlResponseData {
  /**
   * The url where the user can be redirected to sign in.
   */
  url?: string;
}
