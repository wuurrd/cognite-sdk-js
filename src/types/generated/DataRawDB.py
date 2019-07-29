from typing import Optional, List


class DataRawDBItem:
    """A NoSQL database to store customer data."""
    """Unique name of a database."""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name


class DataRawDB:
    items: Optional[List[DataRawDBItem]]

    def __init__(self, items: Optional[List[DataRawDBItem]]) -> None:
        self.items = items
