/**
 * A list of objects along with possible cursors to get the next, or previous, page of
 * results
 */
export interface DataWithCursorRawDBTable {
    items?: Item[];
    /**
     * Cursor to get the next page of results (if available).
     */
    nextCursor?: string;
}

/**
 * A NoSQL database table to store customer data
 */
export interface Item {
    /**
     * Unique name of the table
     */
    name: string;
}
