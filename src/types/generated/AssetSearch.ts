export interface AssetSearch {
    /**
     * Search will return fuzzy matches for the fields you provide.
     */
    search?: AssetSearchSearch;
}

/**
 * Search will return fuzzy matches for the fields you provide.
 */
export interface AssetSearchSearch {
    /**
     * The description of the asset.
     */
    description?: string;
    /**
     * The name of the asset.
     */
    name?: string;
}
