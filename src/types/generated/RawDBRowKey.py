class RawDBRowKey:
    """A row key"""
    """Unique row key"""
    key: str

    def __init__(self, key: str) -> None:
        self.key = key
