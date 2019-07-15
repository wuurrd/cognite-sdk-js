/**
 * Data related to generic OAuth2 authentication. Not used for Azure AD
 */
export interface OAuth2ConfigurationDTO {
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
