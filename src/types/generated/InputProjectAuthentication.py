from typing import Optional, List


class AzureADConfiguration:
    """Data specific to Azure AD authentication"""
    """Azure application ID. You get this when creating the Azure app."""
    app_id: Optional[str]
    """Resource to grant access to. This is usually (always?)
    00000002-0000-0000-c000-000000000000
    """
    app_resource_id: Optional[str]
    """Azure application secret. You get this when creating the Azure app."""
    app_secret: Optional[str]
    """Azure tenant ID."""
    tenant_id: Optional[str]

    def __init__(self, app_id: Optional[str], app_resource_id: Optional[str], app_secret: Optional[str], tenant_id: Optional[str]) -> None:
        self.app_id = app_id
        self.app_resource_id = app_resource_id
        self.app_secret = app_secret
        self.tenant_id = tenant_id


class OAuth2Configuration:
    """Data related to generic OAuth2 authentication. Not used for Azure AD"""
    """Client ID. You probably get this when registering your client with the OAuth2 provider."""
    client_id: Optional[str]
    """Client secret. You probably get this when registering your client with the OAuth2
    provider.
    """
    client_secret: Optional[str]
    """Login URL of OAuth2 provider. E.g https://accounts.google.com/o/oauth2/v2/auth."""
    login_url: Optional[str]
    """Logout URL of OAuth2 provider. E.g https://accounts.google.com/Logout."""
    logout_url: Optional[str]
    """URL to get access token from OAuth2 provider. E.g
    https://www.googleapis.com/oauth2/v4/token.
    """
    token_url: Optional[str]

    def __init__(self, client_id: Optional[str], client_secret: Optional[str], login_url: Optional[str], logout_url: Optional[str], token_url: Optional[str]) -> None:
        self.client_id = client_id
        self.client_secret = client_secret
        self.login_url = login_url
        self.logout_url = logout_url
        self.token_url = token_url


class InputProjectAuthentication:
    """Data about how to authenticate and authorize users"""
    """Data specific to Azure AD authentication"""
    azure_ad_configuration: Optional[AzureADConfiguration]
    """Data related to generic OAuth2 authentication. Not used for Azure AD"""
    o_auth2_configuration: Optional[OAuth2Configuration]
    """List of valid domains. If left empty, any user registered with the OAuth2 provider will
    get access.
    """
    valid_domains: Optional[List[str]]

    def __init__(self, azure_ad_configuration: Optional[AzureADConfiguration], o_auth2_configuration: Optional[OAuth2Configuration], valid_domains: Optional[List[str]]) -> None:
        self.azure_ad_configuration = azure_ad_configuration
        self.o_auth2_configuration = o_auth2_configuration
        self.valid_domains = valid_domains
