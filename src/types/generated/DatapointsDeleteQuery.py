from typing import Optional, List


class DatapointsDeleteQueryItem:
    """Select time series and datapoints to delete."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The timestamp of the first datapoint after inclusiveBegin to not delete. If not set, only
    deletes the datapoint at inclusiveBegin.
    """
    exclusive_end: Optional[int]
    """The timestamp of first datapoint to delete."""
    inclusive_begin: int
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], exclusive_end: Optional[int], inclusive_begin: int, external_id: Optional[str]) -> None:
        self.id = id
        self.exclusive_end = exclusive_end
        self.inclusive_begin = inclusive_begin
        self.external_id = external_id


class DatapointsDeleteQuery:
    """List of delete filters"""
    items: List[DatapointsDeleteQueryItem]

    def __init__(self, items: List[DatapointsDeleteQueryItem]) -> None:
        self.items = items
