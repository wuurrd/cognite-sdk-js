export interface DeleteRequest {
    items: Item[];
    /**
     * Recursively delete whole asset subtrees under given ids
     */
    recursive?: boolean;
}

export interface Item {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
