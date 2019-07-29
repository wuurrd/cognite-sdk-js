from typing import Optional


class Cursor:
    """Cursor for paging through results."""
    cursor: Optional[str]

    def __init__(self, cursor: Optional[str]) -> None:
        self.cursor = cursor
