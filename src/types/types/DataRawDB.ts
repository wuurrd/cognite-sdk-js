export interface DataRawDB {
    items?: Item[];
}

/**
 * A NoSQL database to store customer data.
 */
export interface Item {
    /**
     * Unique name of a database.
     */
    name: string;
}
