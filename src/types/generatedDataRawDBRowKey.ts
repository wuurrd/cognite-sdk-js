export interface DataRawDBRowKey {
    items?: DataRawDBRowKeyItem[];
}

/**
 * A row key
 */
export interface DataRawDBRowKeyItem {
    /**
     * Unique row key
     */
    key: string;
}
