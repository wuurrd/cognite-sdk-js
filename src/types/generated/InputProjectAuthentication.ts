/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Data about how to authenticate and authorize users
 */
export interface InputProjectAuthentication {
  /**
   * Data specific to Azure AD authentication
   */
  azureADConfiguration?: AzureADConfiguration;
  /**
   * Data related to generic OAuth2 authentication. Not used for Azure AD
   */
  oAuth2Configuration?: OAuth2Configuration;
  /**
   * List of valid domains. If left empty, any user registered with the OAuth2 provider will
   * get access.
   */
  validDomains?: string[];
}

/**
 * Data specific to Azure AD authentication
 */
export interface AzureADConfiguration {
  /**
   * Azure application ID. You get this when creating the Azure app.
   */
  appId?: string;
  /**
   * Resource to grant access to. This is usually (always?)
   * 00000002-0000-0000-c000-000000000000
   */
  appResourceId?: string;
  /**
   * Azure application secret. You get this when creating the Azure app.
   */
  appSecret?: string;
  /**
   * Azure tenant ID.
   */
  tenantId?: string;
}

/**
 * Data related to generic OAuth2 authentication. Not used for Azure AD
 */
export interface OAuth2Configuration {
  /**
   * Client ID. You probably get this when registering your client with the OAuth2 provider.
   */
  clientId?: string;
  /**
   * Client secret. You probably get this when registering your client with the OAuth2
   * provider.
   */
  clientSecret?: string;
  /**
   * Login URL of OAuth2 provider. E.g https://accounts.google.com/o/oauth2/v2/auth.
   */
  loginUrl?: string;
  /**
   * Logout URL of OAuth2 provider. E.g https://accounts.google.com/Logout.
   */
  logoutUrl?: string;
  /**
   * URL to get access token from OAuth2 provider. E.g
   * https://www.googleapis.com/oauth2/v4/token.
   */
  tokenUrl?: string;
}
