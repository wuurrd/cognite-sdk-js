from typing import Dict, Any, Optional, List


class DataRawDBRowItem:
    """Row data stored as a JSON object."""
    columns: Dict[str, Any]
    """Unique row key"""
    key: str

    def __init__(self, columns: Dict[str, Any], key: str) -> None:
        self.columns = columns
        self.key = key


class DataRawDBRow:
    items: Optional[List[DataRawDBRowItem]]

    def __init__(self, items: Optional[List[DataRawDBRowItem]]) -> None:
        self.items = items
