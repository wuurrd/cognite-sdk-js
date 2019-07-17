/**
 * Cognite API error
 */
export interface Error {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * List of objects that are not unique.
     */
    duplicated?: { [key: string]: any }[];
    /**
     * Error message
     */
    message: string;
    /**
     * List of lookup objects that do not match any results.
     */
    missing?: { [key: string]: any }[];
}
