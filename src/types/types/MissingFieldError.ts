export interface MissingFieldError {
    error: Error;
}

export interface Error {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Error message
     */
    message: string;
    /**
     * Fields that are missing.
     */
    missingFields: { [key: string]: any }[];
}
