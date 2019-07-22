/**
 * An event represents something that happened at a given interval in time, e.g a failure, a
 * work order etc.
 */
export interface Event {
    /**
     * Asset IDs of related equipment that this event relates to.
     */
    assetIds?: number[];
    /**
     * Textual description of the event.
     */
    description?: string;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    endTime?: number;
    /**
     * External Id provided by client. Should be unique within the project
     */
    externalId?: string;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: { [key: string]: string };
    /**
     * The source of this event.
     */
    source?: string;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    startTime?: number;
    /**
     * Subtype of the event, e.g 'electrical'.
     */
    subtype?: string;
    /**
     * Type of the event, e.g 'failure'.
     */
    type?: string;
    /**
     * Javascript friendly internal ID given to the object.
     */
    id: number;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    createdTime: number;
    /**
     * The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
     * Time (UTC), minus leap seconds.
     */
    lastUpdatedTime: number;
}
