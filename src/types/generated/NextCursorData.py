from typing import Optional


class NextCursorData:
    """Cursor to get the next page of results (if available)."""
    next_cursor: Optional[str]

    def __init__(self, next_cursor: Optional[str]) -> None:
        self.next_cursor = next_cursor
