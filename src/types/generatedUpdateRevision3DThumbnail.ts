/**
 * Request body for the updateModelRevisionThumbnail endpoint.
 */
export interface UpdateRevision3DThumbnail {
    /**
     * File ID of thumbnail file in Files API. _Only JPEG and PNG files are supported_.
     */
    fileId: number;
}
