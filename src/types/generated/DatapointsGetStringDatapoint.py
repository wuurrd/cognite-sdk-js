from typing import Optional, List


class DatapointsGetStringDatapointDatapoint:
    """The data timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The data value."""
    value: str

    def __init__(self, timestamp: int, value: str) -> None:
        self.timestamp = timestamp
        self.value = value


class DatapointsGetStringDatapoint:
    """The external ID of the time series the datapoints belong to."""
    external_id: Optional[str]
    """The ID of the time series the datapoints belong to."""
    id: int
    """The list of datapoints."""
    datapoints: List[DatapointsGetStringDatapointDatapoint]
    """Whether the time series is string valued or not."""
    is_string: bool

    def __init__(self, external_id: Optional[str], id: int, datapoints: List[DatapointsGetStringDatapointDatapoint], is_string: bool) -> None:
        self.external_id = external_id
        self.id = id
        self.datapoints = datapoints
        self.is_string = is_string
