from typing import Union, Optional, List


class DatapointsInsertQueryDatapoint:
    """The timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The numerical data value of a numerical metric.
    
    The string data value of a string metric.
    """
    value: Union[float, str]

    def __init__(self, timestamp: int, value: Union[float, str]) -> None:
        self.timestamp = timestamp
        self.value = value


class DatapointsInsertQueryItem:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The list of datapoints. The limit per request is 100000 datapoints."""
    datapoints: List[DatapointsInsertQueryDatapoint]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], datapoints: List[DatapointsInsertQueryDatapoint], external_id: Optional[str]) -> None:
        self.id = id
        self.datapoints = datapoints
        self.external_id = external_id


class DatapointsInsertQuery:
    items: List[DatapointsInsertQueryItem]

    def __init__(self, items: List[DatapointsInsertQueryItem]) -> None:
        self.items = items
