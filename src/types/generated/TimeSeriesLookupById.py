from typing import Optional, List


class TimeSeriesLookupByIdItem:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class TimeSeriesLookupByID:
    """List of ID objects"""
    items: List[TimeSeriesLookupByIdItem]

    def __init__(self, items: List[TimeSeriesLookupByIdItem]) -> None:
        self.items = items
