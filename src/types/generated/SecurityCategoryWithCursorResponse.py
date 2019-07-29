from typing import List, Optional


class SecurityCategoryWithCursorResponseItem:
    """Id of the security category"""
    id: int
    """Name of the security category"""
    name: str

    def __init__(self, id: int, name: str) -> None:
        self.id = id
        self.name = name


class SecurityCategoryWithCursorResponse:
    """A list of objects along with possible cursors to get the next page of results"""
    items: List[SecurityCategoryWithCursorResponseItem]
    """Cursor to get the next page of results (if available)."""
    next_cursor: Optional[str]

    def __init__(self, items: List[SecurityCategoryWithCursorResponseItem], next_cursor: Optional[str]) -> None:
        self.items = items
        self.next_cursor = next_cursor
