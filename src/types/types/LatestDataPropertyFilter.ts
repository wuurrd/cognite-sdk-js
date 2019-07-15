export type LatestDataPropertyFilter = any[] | boolean | number | number | null | LatestDataPropertyFilterObject | string;

export interface LatestDataPropertyFilterObject {
    /**
     * Get datapoints before this time. The format is N[timeunit]-ago where timeunit is
     * w,d,h,m,s.
     * Example: '2d-ago' gets data that is up to 2 days old. You can also specify time in
     * milliseconds since epoch.
     */
    before?: string;
}
