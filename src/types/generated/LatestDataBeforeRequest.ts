/**
 * Describes the latest query.
 */
export interface LatestDataBeforeRequest {
    /**
     * A JavaScript-friendly internal ID for the object.
     */
    id?: number;
    /**
     * Get datapoints before this time. The format is N[timeunit]-ago where timeunit is
     * w,d,h,m,s.
     * Example: '2d-ago' gets data that is up to 2 days old. You can also specify time in
     * milliseconds since epoch.
     */
    before?: string;
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
}
