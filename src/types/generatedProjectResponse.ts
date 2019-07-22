export interface ProjectResponse {
    /**
     * Data about how to authenticate and authorize users. The authentication configuration is
     * hidden.
     */
    authentication?: Authentication;
    /**
     * A default group for all project users. Can be used to establish default
     * capabilities.WARNING: this group may be logically deleted
     */
    defaultGroupId?: number;
    /**
     * The display name of the project.
     */
    name: string;
    /**
     * The url name of the project. This is used as part of API calls. It should only contain
     * letters, digits and hyphens, as long as the hyphens are not at the start or end.
     */
    urlName: string;
}

/**
 * Data about how to authenticate and authorize users. The authentication configuration is
 * hidden.
 */
export interface Authentication {
    /**
     * List of valid domains. If left empty, any user registered with the OAuth2 provider will
     * get access.
     */
    validDomains?: string[];
}
