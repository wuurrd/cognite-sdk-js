/**
 * A list of objects along with possible cursors to get the next, or previous, page of
 * results
 */
export interface DataWithCursorRawDB {
    items?: DataWithCursorRawDBItem[];
    /**
     * Cursor to get the next page of results (if available).
     */
    nextCursor?: string;
}

/**
 * A NoSQL database to store customer data.
 */
export interface DataWithCursorRawDBItem {
    /**
     * Unique name of a database.
     */
    name: string;
}
