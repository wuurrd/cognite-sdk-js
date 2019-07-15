export interface DataRawDBRow {
    items?: Item[];
}

export interface Item {
    /**
     * Row data stored as a JSON object.
     */
    columns: { [key: string]: any };
    /**
     * Unique row key
     */
    key: string;
}
