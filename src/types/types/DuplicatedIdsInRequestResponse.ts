export interface DuplicatedIDSInRequestResponse {
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
 * Ids and ExternalIds that are duplicated in the request.
 */
export interface Duplicated {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
