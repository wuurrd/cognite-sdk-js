export interface NewAPIKeyResponseDTO {
    /**
     * The time of creation in Unix milliseconds.
     */
    createdTime: number;
    /**
     * The internal ID for the API key.
     */
    id: number;
    /**
     * The ID of the service account.
     */
    serviceAccountId: number;
    /**
     * The status of the API key.
     */
    status: Status;
    /**
     * The API key to be used against the API.
     */
    value: string;
}

/**
 * The status of the API key.
 */
export enum Status {
    Active = "ACTIVE",
    Deleted = "DELETED",
}
