class GetDoubleDatapoint:
    """The data timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The data value."""
    value: float

    def __init__(self, timestamp: int, value: float) -> None:
        self.timestamp = timestamp
        self.value = value
