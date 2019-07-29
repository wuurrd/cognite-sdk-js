from typing import Optional


class AssetSearchSearch:
    """Search will return fuzzy matches for the fields you provide."""
    """The description of the asset."""
    description: Optional[str]
    """The name of the asset."""
    name: Optional[str]

    def __init__(self, description: Optional[str], name: Optional[str]) -> None:
        self.description = description
        self.name = name


class AssetSearch:
    """Search will return fuzzy matches for the fields you provide."""
    search: Optional[AssetSearchSearch]

    def __init__(self, search: Optional[AssetSearchSearch]) -> None:
        self.search = search
