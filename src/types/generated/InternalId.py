class InternalID:
    """Javascript friendly internal ID given to the object."""
    id: int

    def __init__(self, id: int) -> None:
        self.id = id
