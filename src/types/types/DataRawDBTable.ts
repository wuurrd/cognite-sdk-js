export interface DataRawDBTable {
    items?: Item[];
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
