from typing import Optional, List, Dict


class DataExternalFileMetadataItem:
    asset_ids: Optional[List[int]]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """File type. E.g. text/plain, application/pdf, .."""
    mime_type: Optional[str]
    """Name of the file."""
    name: str
    """The source of the file."""
    source: Optional[str]

    def __init__(self, asset_ids: Optional[List[int]], external_id: Optional[str], metadata: Optional[Dict[str, str]], mime_type: Optional[str], name: str, source: Optional[str]) -> None:
        self.asset_ids = asset_ids
        self.external_id = external_id
        self.metadata = metadata
        self.mime_type = mime_type
        self.name = name
        self.source = source


class DataExternalFileMetadata:
    items: Optional[List[DataExternalFileMetadataItem]]

    def __init__(self, items: Optional[List[DataExternalFileMetadataItem]]) -> None:
        self.items = items
