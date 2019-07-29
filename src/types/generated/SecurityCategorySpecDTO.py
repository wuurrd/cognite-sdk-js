class SecurityCategorySpecDTO:
    """Name of the security category"""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name
