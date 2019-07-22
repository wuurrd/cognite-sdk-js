export interface NewApiKeyResponse {
    items: NewApiKeyResponseItem[];
}

export interface NewApiKeyResponseItem {
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
    status: NewApiKeyResponseStatus;
    /**
     * The API key to be used against the API.
     */
    value: string;
}

/**
 * The status of the API key.
 */
export enum NewApiKeyResponseStatus {
    Active = "ACTIVE",
    Deleted = "DELETED",
}
