class RawDB:
    """A NoSQL database to store customer data."""
    """Unique name of a database."""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name
