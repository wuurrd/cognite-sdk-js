/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Represents the current authentication status of the request
 */
export interface LoginStatusDTO {
  /**
   * ID of the api key making the request. This is optional and only present if an api key is
   * used as authentication.
   */
  apiKeyId?: number;
  /**
   * Whether the user is logged in or not.
   */
  loggedIn: boolean;
  /**
   * Name of project user belongs to
   */
  project: string;
  /**
   * Internal project id of the project
   */
  projectId: number;
  /**
   * The user principal, e.g john.doe@corporation.com.
   */
  user: string;
}
