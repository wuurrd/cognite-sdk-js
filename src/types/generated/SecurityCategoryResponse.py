from typing import Optional, List


class SecurityCategoryResponseItem:
    """Id of the security category"""
    id: int
    """Name of the security category"""
    name: str

    def __init__(self, id: int, name: str) -> None:
        self.id = id
        self.name = name


class SecurityCategoryResponse:
    items: Optional[List[SecurityCategoryResponseItem]]

    def __init__(self, items: Optional[List[SecurityCategoryResponseItem]]) -> None:
        self.items = items
