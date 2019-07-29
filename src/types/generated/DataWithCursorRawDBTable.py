from typing import Optional, List


class DataWithCursorRawDBTableItem:
    """A NoSQL database table to store customer data"""
    """Unique name of the table"""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name


class DataWithCursorRawDBTable:
    """A list of objects along with possible cursors to get the next, or previous, page of
    results
    """
    items: Optional[List[DataWithCursorRawDBTableItem]]
    """Cursor to get the next page of results (if available)."""
    next_cursor: Optional[str]

    def __init__(self, items: Optional[List[DataWithCursorRawDBTableItem]], next_cursor: Optional[str]) -> None:
        self.items = items
        self.next_cursor = next_cursor
