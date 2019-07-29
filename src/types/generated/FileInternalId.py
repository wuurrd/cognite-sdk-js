from typing import Optional


class FileInternalID:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]

    def __init__(self, id: Optional[int]) -> None:
        self.id = id
