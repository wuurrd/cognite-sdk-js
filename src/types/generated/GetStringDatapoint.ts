export interface GetStringDatapoint {
    /**
     * The data timestamp in milliseconds since the epoch (Jan 1, 1970).
     */
    timestamp: Date;
    /**
     * The data value.
     */
    value: string;
}
