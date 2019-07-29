class GetDatapointMetadata:
    """The data timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int

    def __init__(self, timestamp: int) -> None:
        self.timestamp = timestamp
