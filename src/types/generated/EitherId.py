from typing import Optional


class EitherID:
    """Javascript friendly internal ID given to the object."""
    id: Optional[int]
    """External Id provided by client. Should be unique within the project"""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id
