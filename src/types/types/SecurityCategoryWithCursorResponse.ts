/**
 * A list of objects along with possible cursors to get the next page of results
 */
export interface SecurityCategoryWithCursorResponse {
    items: Item[];
    /**
     * Cursor to get the next page of results (if available).
     */
    nextCursor?: string;
}

export interface Item {
    /**
     * Id of the security category
     */
    id: number;
    /**
     * Name of the security category
     */
    name: string;
}
