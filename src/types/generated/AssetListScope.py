from typing import Optional, Dict, List


class AssetListScopeCreatedTime:
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


class AssetListScopeLastUpdatedTime:
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


class AssetListScopeRootID:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class AssetListScopeFilter:
    """Filter on assets with strict matching."""
    """Range between two timestamps."""
    created_time: Optional[AssetListScopeCreatedTime]
    """The external ID provided by the client. Must be unique within the project."""
    external_id_prefix: Optional[str]
    """Range between two timestamps."""
    last_updated_time: Optional[AssetListScopeLastUpdatedTime]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the asset."""
    name: Optional[str]
    parent_ids: Optional[List[int]]
    """Whether the filtered assets are root assets, or not."""
    root: Optional[bool]
    root_ids: Optional[List[AssetListScopeRootID]]
    """The source of the asset."""
    source: Optional[str]

    def __init__(self, created_time: Optional[AssetListScopeCreatedTime], external_id_prefix: Optional[str], last_updated_time: Optional[AssetListScopeLastUpdatedTime], metadata: Optional[Dict[str, str]], name: Optional[str], parent_ids: Optional[List[int]], root: Optional[bool], root_ids: Optional[List[AssetListScopeRootID]], source: Optional[str]) -> None:
        self.created_time = created_time
        self.external_id_prefix = external_id_prefix
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.name = name
        self.parent_ids = parent_ids
        self.root = root
        self.root_ids = root_ids
        self.source = source


class AssetListScope:
    """Cursor for paging through results."""
    """Filter on assets with strict matching."""
    filter: Optional[AssetListScopeFilter]
    """<- Limits the maximum number of results to be returned by a single request. If there are
    more results to the request, the 'nextCursor' attribute is provided as part of response.
    The request may contain fewer results than the request limit.
    """
    limit: Optional[int]
    cursor: Optional[str]

    def __init__(self, filter: Optional[AssetListScopeFilter], limit: Optional[int], cursor: Optional[str]) -> None:
        self.filter = filter
        self.limit = limit
        self.cursor = cursor
