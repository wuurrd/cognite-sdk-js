from typing import List


class DataIdentifiersItem:
    """A JavaScript-friendly internal ID for the object."""
    id: int

    def __init__(self, id: int) -> None:
        self.id = id


class DataIdentifiers:
    """List of ID objects"""
    items: List[DataIdentifiersItem]

    def __init__(self, items: List[DataIdentifiersItem]) -> None:
        self.items = items
