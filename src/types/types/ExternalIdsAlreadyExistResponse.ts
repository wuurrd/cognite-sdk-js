export interface ExternalIDSAlreadyExistResponse {
    /**
     * Error details
     */
    error: Error;
}

/**
 * Error details
 */
export interface Error {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Items that are duplicated.
     */
    duplicated: Duplicated[];
    /**
     * Error message
     */
    message: string;
}

/**
 * ExternalIds that already exist.
 */
export interface Duplicated {
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId: string;
}
