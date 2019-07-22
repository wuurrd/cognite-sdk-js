export interface DataRawDBTable {
    items?: DataRawDBTableItem[];
}

/**
 * A NoSQL database table to store customer data
 */
export interface DataRawDBTableItem {
    /**
     * Unique name of the table
     */
    name: string;
}
