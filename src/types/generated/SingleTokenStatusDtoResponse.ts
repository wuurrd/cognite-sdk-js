export interface SingleTokenStatusDTOResponse {
    data: SingleTokenStatusDTOResponseData;
}

export interface SingleTokenStatusDTOResponseData {
    /**
     * Whether this token has expired
     */
    expired: boolean;
    /**
     * The token that was sent for validation
     */
    token: string;
    /**
     * Whether this token is valid
     */
    valid: boolean;
}
