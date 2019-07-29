from typing import Optional, List


class DataRawDBRowKeyItem:
    """A row key"""
    """Unique row key"""
    key: str

    def __init__(self, key: str) -> None:
        self.key = key


class DataRawDBRowKey:
    items: Optional[List[DataRawDBRowKeyItem]]

    def __init__(self, items: Optional[List[DataRawDBRowKeyItem]]) -> None:
        self.items = items
