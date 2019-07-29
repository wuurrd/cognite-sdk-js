from typing import Optional


class AzureADConfigurationDTO:
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
