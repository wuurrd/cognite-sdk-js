/**
 * A list of objects along with possible cursors to get the next page of results
 */
export interface SecurityCategoryWithCursorResponse {
    items: SecurityCategoryWithCursorResponseItem[];
    /**
     * Cursor to get the next page of results (if available).
     */
    nextCursor?: string;
}

export interface SecurityCategoryWithCursorResponseItem {
    /**
     * Id of the security category
     */
    id: number;
    /**
     * Name of the security category
     */
    name: string;
}
