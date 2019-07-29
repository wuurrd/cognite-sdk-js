from typing import Optional, List, Dict


class FilesMetadata:
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
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    created_time: int
    """A JavaScript-friendly internal ID for the object."""
    id: int
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    last_updated_time: int
    """Whether or not the actual file is uploaded.  This field is returned only by the API, it
    has no effect in a post body.
    """
    uploaded: bool
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    uploaded_time: Optional[int]

    def __init__(self, asset_ids: Optional[List[int]], external_id: Optional[str], metadata: Optional[Dict[str, str]], mime_type: Optional[str], name: str, source: Optional[str], created_time: int, id: int, last_updated_time: int, uploaded: bool, uploaded_time: Optional[int]) -> None:
        self.asset_ids = asset_ids
        self.external_id = external_id
        self.metadata = metadata
        self.mime_type = mime_type
        self.name = name
        self.source = source
        self.created_time = created_time
        self.id = id
        self.last_updated_time = last_updated_time
        self.uploaded = uploaded
        self.uploaded_time = uploaded_time
