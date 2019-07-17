export interface DataExternalFileMetadata {
    items?: DataExternalFileMetadataItem[];
}

export interface DataExternalFileMetadataItem {
    assetIds?: number[];
    /**
     * The external ID provided by the client. Must be unique within the project.
     */
    externalId?: string;
    /**
     * Custom, application specific metadata. String key -> String value. Limits: Maximum length
     * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
     */
    metadata?: { [key: string]: string };
    /**
     * File type. E.g. text/plain, application/pdf, ..
     */
    mimeType?: string;
    /**
     * Name of the file.
     */
    name: string;
    /**
     * The source of the file.
     */
    source?: string;
}
