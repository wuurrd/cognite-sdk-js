from typing import Optional, List


class FileLinkIdsItem:
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class FileLinkIDS:
    items: Optional[List[FileLinkIdsItem]]

    def __init__(self, items: Optional[List[FileLinkIdsItem]]) -> None:
        self.items = items
