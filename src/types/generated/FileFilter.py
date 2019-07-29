from typing import Optional, List, Dict


class FileFilterCreatedTime:
    """Range between two timestamps."""
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    max: Optional[int]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    min: Optional[int]

    def __init__(self, max: Optional[int], min: Optional[int]) -> None:
        self.max = max
        self.min = min


class FileFilterLastUpdatedTime:
    """Range between two timestamps."""
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    max: Optional[int]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    min: Optional[int]

    def __init__(self, max: Optional[int], min: Optional[int]) -> None:
        self.max = max
        self.min = min


class FileFilterUploadedTime:
    """Range between two timestamps."""
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    max: Optional[int]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    min: Optional[int]

    def __init__(self, max: Optional[int], min: Optional[int]) -> None:
        self.max = max
        self.min = min


class FileFilterFilter:
    """Only include files that reference these specific asset IDs."""
    asset_ids: Optional[List[int]]
    """Range between two timestamps."""
    created_time: Optional[FileFilterCreatedTime]
    """The external ID provided by the client. Must be unique within the project."""
    external_id_prefix: Optional[str]
    """Range between two timestamps."""
    last_updated_time: Optional[FileFilterLastUpdatedTime]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """File type. E.g. text/plain, application/pdf, .."""
    mime_type: Optional[str]
    """Name of the file."""
    name: Optional[str]
    """The source of this event."""
    source: Optional[str]
    """Whether or not the actual file is uploaded. This field is returned only by the API, it
    has no effect in a post body.
    """
    uploaded: Optional[bool]
    """Range between two timestamps."""
    uploaded_time: Optional[FileFilterUploadedTime]

    def __init__(self, asset_ids: Optional[List[int]], created_time: Optional[FileFilterCreatedTime], external_id_prefix: Optional[str], last_updated_time: Optional[FileFilterLastUpdatedTime], metadata: Optional[Dict[str, str]], mime_type: Optional[str], name: Optional[str], source: Optional[str], uploaded: Optional[bool], uploaded_time: Optional[FileFilterUploadedTime]) -> None:
        self.asset_ids = asset_ids
        self.created_time = created_time
        self.external_id_prefix = external_id_prefix
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.mime_type = mime_type
        self.name = name
        self.source = source
        self.uploaded = uploaded
        self.uploaded_time = uploaded_time


class FileFilter:
    """Filter on files with exact match"""
    filter: Optional[FileFilterFilter]
    """<- Maximum number of items that the client want to get back."""
    limit: Optional[int]

    def __init__(self, filter: Optional[FileFilterFilter], limit: Optional[int]) -> None:
        self.filter = filter
        self.limit = limit
