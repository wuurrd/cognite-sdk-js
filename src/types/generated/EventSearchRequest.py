from typing import Optional, List, Dict


class EventSearchRequestCreatedTime:
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


class EventSearchRequestEndTime:
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


class EventSearchRequestLastUpdatedTime:
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


class EventSearchRequestRootAssetID:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class EventSearchRequestStartTime:
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


class EventSearchRequestFilter:
    """Filter on events filter with exact match"""
    """Asset IDs of related equipment that this event relates to."""
    asset_ids: Optional[List[int]]
    """Range between two timestamps."""
    created_time: Optional[EventSearchRequestCreatedTime]
    """Range between two timestamps."""
    end_time: Optional[EventSearchRequestEndTime]
    """External Id provided by client. Should be unique within the project"""
    external_id_prefix: Optional[str]
    """Range between two timestamps."""
    last_updated_time: Optional[EventSearchRequestLastUpdatedTime]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The IDs of the root assets that the related assets should be children of."""
    root_asset_ids: Optional[List[EventSearchRequestRootAssetID]]
    """The source of this event."""
    source: Optional[str]
    """Range between two timestamps."""
    start_time: Optional[EventSearchRequestStartTime]
    """The event subtype"""
    subtype: Optional[str]
    """The event type"""
    type: Optional[str]

    def __init__(self, asset_ids: Optional[List[int]], created_time: Optional[EventSearchRequestCreatedTime], end_time: Optional[EventSearchRequestEndTime], external_id_prefix: Optional[str], last_updated_time: Optional[EventSearchRequestLastUpdatedTime], metadata: Optional[Dict[str, str]], root_asset_ids: Optional[List[EventSearchRequestRootAssetID]], source: Optional[str], start_time: Optional[EventSearchRequestStartTime], subtype: Optional[str], type: Optional[str]) -> None:
        self.asset_ids = asset_ids
        self.created_time = created_time
        self.end_time = end_time
        self.external_id_prefix = external_id_prefix
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.root_asset_ids = root_asset_ids
        self.source = source
        self.start_time = start_time
        self.subtype = subtype
        self.type = type


class EventSearchRequestSearch:
    """text to search in description field across events"""
    description: Optional[str]

    def __init__(self, description: Optional[str]) -> None:
        self.description = description


class EventSearchRequest:
    """Filter on events filter with exact match"""
    """Filter on events filter with exact match"""
    filter: Optional[EventSearchRequestFilter]
    """<- Limits the maximum number of results to be returned by single request. In case there
    are more results to the request 'nextCursor' attribute will be provided as part of
    response. Request may contain less results than request limit.
    """
    limit: Optional[int]
    search: Optional[EventSearchRequestSearch]

    def __init__(self, filter: Optional[EventSearchRequestFilter], limit: Optional[int], search: Optional[EventSearchRequestSearch]) -> None:
        self.filter = filter
        self.limit = limit
        self.search = search
