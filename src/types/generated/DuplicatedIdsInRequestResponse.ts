export interface DuplicatedIdsInRequestResponse {
    /**
     * Error details
     */
    error: DuplicatedIdsInRequestResponseError;
}

/**
 * Error details
 */
export interface DuplicatedIdsInRequestResponseError {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Items that are duplicated.
     */
    duplicated: DuplicatedIdsInRequestResponseDuplicated[];
    /**
     * Error message
     */
    message: string;
}

/**
 * Ids and ExternalIds that are duplicated in the request.
 */
export interface DuplicatedIdsInRequestResponseDuplicated {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
