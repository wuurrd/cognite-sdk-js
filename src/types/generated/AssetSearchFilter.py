from typing import Optional, Dict, List


class AssetSearchFilterCreatedTime:
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


class AssetSearchFilterLastUpdatedTime:
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


class AssetSearchFilterRootID:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class AssetSearchFilterFilter:
    """Filter on assets with strict matching."""
    """Range between two timestamps."""
    created_time: Optional[AssetSearchFilterCreatedTime]
    """The external ID provided by the client. Must be unique within the project."""
    external_id_prefix: Optional[str]
    """Range between two timestamps."""
    last_updated_time: Optional[AssetSearchFilterLastUpdatedTime]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the asset."""
    name: Optional[str]
    parent_ids: Optional[List[int]]
    """Whether the filtered assets are root assets, or not."""
    root: Optional[bool]
    root_ids: Optional[List[AssetSearchFilterRootID]]
    """The source of the asset."""
    source: Optional[str]

    def __init__(self, created_time: Optional[AssetSearchFilterCreatedTime], external_id_prefix: Optional[str], last_updated_time: Optional[AssetSearchFilterLastUpdatedTime], metadata: Optional[Dict[str, str]], name: Optional[str], parent_ids: Optional[List[int]], root: Optional[bool], root_ids: Optional[List[AssetSearchFilterRootID]], source: Optional[str]) -> None:
        self.created_time = created_time
        self.external_id_prefix = external_id_prefix
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.name = name
        self.parent_ids = parent_ids
        self.root = root
        self.root_ids = root_ids
        self.source = source


class AssetSearchFilterSearch:
    """Search will return fuzzy matches for the fields you provide."""
    """The description of the asset."""
    description: Optional[str]
    """The name of the asset."""
    name: Optional[str]

    def __init__(self, description: Optional[str], name: Optional[str]) -> None:
        self.description = description
        self.name = name


class AssetSearchFilter:
    """Search request with filter capabilities."""
    """Filter on assets with strict matching."""
    filter: Optional[AssetSearchFilterFilter]
    """<- Limits the maximum number of results to be returned by a single request. If there are
    more results to the request, the 'nextCursor' attribute is provided as part of response.
    The request may contain fewer results than the request limit.
    """
    limit: Optional[int]
    """Search will return fuzzy matches for the fields you provide."""
    search: Optional[AssetSearchFilterSearch]

    def __init__(self, filter: Optional[AssetSearchFilterFilter], limit: Optional[int], search: Optional[AssetSearchFilterSearch]) -> None:
        self.filter = filter
        self.limit = limit
        self.search = search
