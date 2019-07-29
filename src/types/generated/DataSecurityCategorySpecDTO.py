from typing import List


class DataSecurityCategorySpecDTOItem:
    """Name of the security category"""
    name: str

    def __init__(self, name: str) -> None:
        self.name = name


class DataSecurityCategorySpecDTO:
    items: List[DataSecurityCategorySpecDTOItem]

    def __init__(self, items: List[DataSecurityCategorySpecDTOItem]) -> None:
        self.items = items
