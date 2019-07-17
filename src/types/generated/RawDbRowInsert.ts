export interface RawDBRowInsert {
    /**
     * Row data stored as a JSON object.
     */
    columns: { [key: string]: any };
    /**
     * Unique row key
     */
    key: string;
}
