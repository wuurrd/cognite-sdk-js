from typing import Optional, List


class DataWithCursorRawDBItem:
    """A NoSQL database to store customer data."""
    """Unique name of a database."""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name


class DataWithCursorRawDB:
    """A list of objects along with possible cursors to get the next, or previous, page of
    results
    """
    items: Optional[List[DataWithCursorRawDBItem]]
    """Cursor to get the next page of results (if available)."""
    next_cursor: Optional[str]

    def __init__(self, items: Optional[List[DataWithCursorRawDBItem]], next_cursor: Optional[str]) -> None:
        self.items = items
        self.next_cursor = next_cursor
