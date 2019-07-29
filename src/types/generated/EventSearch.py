from typing import Optional


class EventSearch:
    """text to search in description field across events"""
    description: Optional[str]

    def __init__(self, description: Optional[str]) -> None:
        self.description = description
