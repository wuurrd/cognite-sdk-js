/*!
 * Copyright 2019 Cognite AS
 */

/**
 * Data specific to Azure AD authentication
 */
export interface AzureADConfigurationDTO {
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
