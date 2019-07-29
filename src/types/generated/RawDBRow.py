from typing import Dict, Any


class RawDBRow:
    """Row data stored as a JSON object."""
    columns: Dict[str, Any]
    """Unique row key"""
    key: str
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    last_updated_time: int

    def __init__(self, columns: Dict[str, Any], key: str, last_updated_time: int) -> None:
        self.columns = columns
        self.key = key
        self.last_updated_time = last_updated_time
