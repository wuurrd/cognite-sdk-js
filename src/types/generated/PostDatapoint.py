from typing import Union


class PostDatapoint:
    """The timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The numerical data value of a numerical metric.
    
    The string data value of a string metric.
    """
    value: Union[float, str]

    def __init__(self, timestamp: int, value: Union[float, str]) -> None:
        self.timestamp = timestamp
        self.value = value
