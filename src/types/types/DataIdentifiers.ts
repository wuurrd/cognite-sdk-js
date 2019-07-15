export interface DataIdentifiers {
    /**
     * List of ID objects
     */
    items: Item[];
}

export interface Item {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id: number;
}
