export interface APIKeyResponse {
    items: APIKeyObject[];
}

export interface APIKeyObject {
    /**
     * The time of creation in Unix milliseconds.
     */
    createdTime: number;
    /**
     * The ID of the API key.
     */
    id: number;
    /**
     * The ID of the service account.
     */
    serviceAccountId: number;
    status:           Status;
}

export enum Status {
    Active = "ACTIVE",
    Deleted = "DELETED",
}
