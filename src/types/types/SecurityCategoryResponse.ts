export interface SecurityCategoryResponse {
    items?: Item[];
}

export interface Item {
    /**
     * Id of the security category
     */
    id: number;
    /**
     * Name of the security category
     */
    name: string;
}
