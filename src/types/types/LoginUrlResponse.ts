export interface LoginURLResponse {
    /**
     * Represents an url where the user can be redirected to sign in.
     */
    data?: Data;
}

/**
 * Represents an url where the user can be redirected to sign in.
 */
export interface Data {
    /**
     * The url where the user can be redirected to sign in.
     */
    url?: string;
}
