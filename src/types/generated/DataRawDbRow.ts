export interface DataRawDBRow {
    items?: DataRawDBRowItem[];
}

export interface DataRawDBRowItem {
    /**
     * Row data stored as a JSON object.
     */
    columns: { [key: string]: any };
    /**
     * Unique row key
     */
    key: string;
}
