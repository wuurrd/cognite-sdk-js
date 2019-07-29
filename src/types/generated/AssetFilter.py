from typing import Optional, Dict, List


class AssetFilterCreatedTime:
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


class AssetFilterLastUpdatedTime:
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


class AssetFilterRootID:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class AssetFilterFilter:
    """Filter on assets with strict matching."""
    """Range between two timestamps."""
    created_time: Optional[AssetFilterCreatedTime]
    """The external ID provided by the client. Must be unique within the project."""
    external_id_prefix: Optional[str]
    """Range between two timestamps."""
    last_updated_time: Optional[AssetFilterLastUpdatedTime]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the asset."""
    name: Optional[str]
    parent_ids: Optional[List[int]]
    """Whether the filtered assets are root assets, or not."""
    root: Optional[bool]
    root_ids: Optional[List[AssetFilterRootID]]
    """The source of the asset."""
    source: Optional[str]

    def __init__(self, created_time: Optional[AssetFilterCreatedTime], external_id_prefix: Optional[str], last_updated_time: Optional[AssetFilterLastUpdatedTime], metadata: Optional[Dict[str, str]], name: Optional[str], parent_ids: Optional[List[int]], root: Optional[bool], root_ids: Optional[List[AssetFilterRootID]], source: Optional[str]) -> None:
        self.created_time = created_time
        self.external_id_prefix = external_id_prefix
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.name = name
        self.parent_ids = parent_ids
        self.root = root
        self.root_ids = root_ids
        self.source = source


class AssetFilter:
    """Filter on assets with strict matching."""
    filter: Optional[AssetFilterFilter]
    """<- Limits the maximum number of results to be returned by a single request. If there are
    more results to the request, the 'nextCursor' attribute is provided as part of response.
    The request may contain fewer results than the request limit.
    """
    limit: Optional[int]

    def __init__(self, filter: Optional[AssetFilterFilter], limit: Optional[int]) -> None:
        self.filter = filter
        self.limit = limit
