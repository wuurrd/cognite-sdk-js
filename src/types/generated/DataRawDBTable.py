from typing import Optional, List


class DataRawDBTableItem:
    """A NoSQL database table to store customer data"""
    """Unique name of the table"""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name


class DataRawDBTable:
    items: Optional[List[DataRawDBTableItem]]

    def __init__(self, items: Optional[List[DataRawDBTableItem]]) -> None:
        self.items = items
