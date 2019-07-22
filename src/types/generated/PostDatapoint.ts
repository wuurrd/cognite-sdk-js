export interface PostDatapoint {
    /**
     * The timestamp in milliseconds since the epoch (Jan 1, 1970).
     */
    timestamp: Date;
    /**
     * The numerical data value of a numerical metric.
     *
     * The string data value of a string metric.
     */
    value: number | string;
}
