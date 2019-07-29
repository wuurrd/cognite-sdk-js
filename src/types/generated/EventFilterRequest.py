from typing import Optional, List, Dict


class EventFilterRequestCreatedTime:
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


class EventFilterRequestEndTime:
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


class EventFilterRequestLastUpdatedTime:
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


class EventFilterRequestRootAssetID:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class EventFilterRequestStartTime:
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


class EventFilterRequestFilter:
    """Filter on events filter with exact match"""
    """Asset IDs of related equipment that this event relates to."""
    asset_ids: Optional[List[int]]
    """Range between two timestamps."""
    created_time: Optional[EventFilterRequestCreatedTime]
    """Range between two timestamps."""
    end_time: Optional[EventFilterRequestEndTime]
    """External Id provided by client. Should be unique within the project"""
    external_id_prefix: Optional[str]
    """Range between two timestamps."""
    last_updated_time: Optional[EventFilterRequestLastUpdatedTime]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The IDs of the root assets that the related assets should be children of."""
    root_asset_ids: Optional[List[EventFilterRequestRootAssetID]]
    """The source of this event."""
    source: Optional[str]
    """Range between two timestamps."""
    start_time: Optional[EventFilterRequestStartTime]
    """The event subtype"""
    subtype: Optional[str]
    """The event type"""
    type: Optional[str]

    def __init__(self, asset_ids: Optional[List[int]], created_time: Optional[EventFilterRequestCreatedTime], end_time: Optional[EventFilterRequestEndTime], external_id_prefix: Optional[str], last_updated_time: Optional[EventFilterRequestLastUpdatedTime], metadata: Optional[Dict[str, str]], root_asset_ids: Optional[List[EventFilterRequestRootAssetID]], source: Optional[str], start_time: Optional[EventFilterRequestStartTime], subtype: Optional[str], type: Optional[str]) -> None:
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


class EventFilterRequest:
    """Filter request for events. Filters exact field matching or timestamp ranges inclusive min
    and max.
    
    Cursor for paging through results.
    """
    """Filter on events filter with exact match"""
    filter: Optional[EventFilterRequestFilter]
    """<- Limits the maximum number of results to be returned by single request. In case there
    are more results to the request 'nextCursor' attribute will be provided as part of
    response. Request may contain less results than request limit.
    """
    limit: Optional[int]
    cursor: Optional[str]

    def __init__(self, filter: Optional[EventFilterRequestFilter], limit: Optional[int], cursor: Optional[str]) -> None:
        self.filter = filter
        self.limit = limit
        self.cursor = cursor
