/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Data about how to authenticate and authorize users. The authentication configuration is
 * hidden.
 */
export interface OutputProjectAuthentication {
  /**
   * List of valid domains. If left empty, any user registered with the OAuth2 provider will
   * get access.
   */
  validDomains?: string[];
}
