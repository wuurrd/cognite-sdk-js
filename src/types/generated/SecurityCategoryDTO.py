class SecurityCategoryDTO:
    """Id of the security category"""
    id: int
    """Name of the security category"""
    name: str

    def __init__(self, id: int, name: str) -> None:
        self.id = id
        self.name = name
