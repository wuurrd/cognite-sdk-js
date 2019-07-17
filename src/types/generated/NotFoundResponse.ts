export interface NotFoundResponse {
    /**
     * Error details.
     */
    error: NotFoundResponseError;
}

/**
 * Error details.
 */
export interface NotFoundResponseError {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Error message.
     */
    message: string;
    /**
     * Items that are not found.
     */
    missing: Missing[];
}

/**
 * Ids or ExternalIds that are not found.
 */
export interface Missing {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
