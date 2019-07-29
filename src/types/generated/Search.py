from typing import Optional


class Search:
    """Prefix and fuzzy search on description."""
    description: Optional[str]
    """Prefix and fuzzy search on name."""
    name: Optional[str]
    """Search on name and description using wildcard search on each
    of the words (separated by spaces). Retrieves results where at least one word match.
    """
    query: Optional[str]

    def __init__(self, description: Optional[str], name: Optional[str], query: Optional[str]) -> None:
        self.description = description
        self.name = name
        self.query = query
