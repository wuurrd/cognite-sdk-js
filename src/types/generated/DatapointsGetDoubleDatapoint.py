from typing import Optional, List


class DatapointsGetDoubleDatapointDatapoint:
    """The data timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The data value."""
    value: float

    def __init__(self, timestamp: int, value: float) -> None:
        self.timestamp = timestamp
        self.value = value


class DatapointsGetDoubleDatapoint:
    """The external ID of the time series the datapoints belong to."""
    external_id: Optional[str]
    """The ID of the time series the datapoints belong to."""
    id: int
    """The list of datapoints"""
    datapoints: List[DatapointsGetDoubleDatapointDatapoint]
    """Whether the time series is string valued or not."""
    is_string: bool

    def __init__(self, external_id: Optional[str], id: int, datapoints: List[DatapointsGetDoubleDatapointDatapoint], is_string: bool) -> None:
        self.external_id = external_id
        self.id = id
        self.datapoints = datapoints
        self.is_string = is_string
