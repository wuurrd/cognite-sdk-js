from typing import Optional, List


class DeleteRequestItem:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class DeleteRequest:
    items: List[DeleteRequestItem]
    """Recursively delete whole asset subtrees under given ids"""
    recursive: Optional[bool]

    def __init__(self, items: List[DeleteRequestItem], recursive: Optional[bool]) -> None:
        self.items = items
        self.recursive = recursive
