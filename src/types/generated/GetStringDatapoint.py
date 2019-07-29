class GetStringDatapoint:
    """The data timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The data value."""
    value: str

    def __init__(self, timestamp: int, value: str) -> None:
        self.timestamp = timestamp
        self.value = value
