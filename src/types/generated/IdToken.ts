/*!
 * Copyright 2019 Cognite AS
 */

/**
 * An ID JWT token
 */
export interface IDToken {
  /**
   * The expiration time of the token in seconds (unix)
   */
  exp: number;
  /**
   * Which groups (by id) the subject is in
   */
  groups: number[];
  /**
   * Which CDF project the subject is in
   */
  project_name: string;
  /**
   * The signing key id
   */
  signing_key: string;
  /**
   * The subject of the token
   */
  sub: string;
}
