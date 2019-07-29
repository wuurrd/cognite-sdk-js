from typing import Optional, Dict, List


class AssetChangeByIdDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeByIdExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeByIdMetadata:
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    """Set the key-value pairs. All existing key-value pairs will be removed."""
    set: Optional[Dict[str, str]]
    """Add the key-value pairs. Values for existing keys will be overwritten."""
    add: Optional[Dict[str, str]]
    """Remove the key-value pairs with the specified keys."""
    remove: Optional[List[str]]

    def __init__(self, set: Optional[Dict[str, str]], add: Optional[Dict[str, str]], remove: Optional[List[str]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class AssetChangeByIdName:
    """Non-removable string change."""
    set: str

    def __init__(self, set: str) -> None:
        self.set = set


class AssetChangeByIdSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeByIdUpdate:
    """Removable string change."""
    description: Optional[AssetChangeByIdDescription]
    """Removable string change."""
    external_id: Optional[AssetChangeByIdExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[AssetChangeByIdMetadata]
    """Non-removable string change."""
    name: Optional[AssetChangeByIdName]
    """Removable string change."""
    source: Optional[AssetChangeByIdSource]

    def __init__(self, description: Optional[AssetChangeByIdDescription], external_id: Optional[AssetChangeByIdExternalID], metadata: Optional[AssetChangeByIdMetadata], name: Optional[AssetChangeByIdName], source: Optional[AssetChangeByIdSource]) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.source = source


class AssetChangeByID:
    """Changes applied to asset"""
    update: AssetChangeByIdUpdate
    """A JavaScript-friendly internal ID for the object."""
    id: int

    def __init__(self, update: AssetChangeByIdUpdate, id: int) -> None:
        self.update = update
        self.id = id
