from typing import Optional


class OAuth2ConfigurationDTO:
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
