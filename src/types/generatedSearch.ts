export interface Search {
    /**
     * Prefix and fuzzy search on description.
     */
    description?: string;
    /**
     * Prefix and fuzzy search on name.
     */
    name?: string;
    /**
     * Search on name and description using wildcard search on each
     * of the words (separated by spaces). Retrieves results where at least one word match.
     */
    query?: string;
}
