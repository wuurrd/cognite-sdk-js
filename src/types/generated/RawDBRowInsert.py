from typing import Dict, Any


class RawDBRowInsert:
    """Row data stored as a JSON object."""
    columns: Dict[str, Any]
    """Unique row key"""
    key: str

    def __init__(self, columns: Dict[str, Any], key: str) -> None:
        self.columns = columns
        self.key = key
