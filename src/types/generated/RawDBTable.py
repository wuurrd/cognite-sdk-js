class RawDBTable:
    """A NoSQL database table to store customer data"""
    """Unique name of the table"""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name
