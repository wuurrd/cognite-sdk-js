from typing import Optional, List, Dict


class DataExternalEventItem:
    """An event represents something that happened at a given interval in time, e.g a failure, a
    work order etc.
    """
    """Asset IDs of related equipment that this event relates to."""
    asset_ids: Optional[List[int]]
    """Textual description of the event."""
    description: Optional[str]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    end_time: Optional[int]
    """External Id provided by client. Should be unique within the project"""
    external_id: Optional[str]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The source of this event."""
    source: Optional[str]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    start_time: Optional[int]
    """Subtype of the event, e.g 'electrical'."""
    subtype: Optional[str]
    """Type of the event, e.g 'failure'."""
    type: Optional[str]

    def __init__(self, asset_ids: Optional[List[int]], description: Optional[str], end_time: Optional[int], external_id: Optional[str], metadata: Optional[Dict[str, str]], source: Optional[str], start_time: Optional[int], subtype: Optional[str], type: Optional[str]) -> None:
        self.asset_ids = asset_ids
        self.description = description
        self.end_time = end_time
        self.external_id = external_id
        self.metadata = metadata
        self.source = source
        self.start_time = start_time
        self.subtype = subtype
        self.type = type


class DataExternalEvent:
    items: List[DataExternalEventItem]

    def __init__(self, items: List[DataExternalEventItem]) -> None:
        self.items = items
