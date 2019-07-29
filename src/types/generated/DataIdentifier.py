class DataIdentifier:
    """A JavaScript-friendly internal ID for the object."""
    id: int

    def __init__(self, id: int) -> None:
        self.id = id
