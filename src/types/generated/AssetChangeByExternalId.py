from typing import Optional, Dict, List


class AssetChangeByExternalIdDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeByExternalIdExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeByExternalIdMetadata:
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


class AssetChangeByExternalIdName:
    """Non-removable string change."""
    set: str

    def __init__(self, set: str) -> None:
        self.set = set


class AssetChangeByExternalIdSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeByExternalIdUpdate:
    """Removable string change."""
    description: Optional[AssetChangeByExternalIdDescription]
    """Removable string change."""
    external_id: Optional[AssetChangeByExternalIdExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[AssetChangeByExternalIdMetadata]
    """Non-removable string change."""
    name: Optional[AssetChangeByExternalIdName]
    """Removable string change."""
    source: Optional[AssetChangeByExternalIdSource]

    def __init__(self, description: Optional[AssetChangeByExternalIdDescription], external_id: Optional[AssetChangeByExternalIdExternalID], metadata: Optional[AssetChangeByExternalIdMetadata], name: Optional[AssetChangeByExternalIdName], source: Optional[AssetChangeByExternalIdSource]) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.source = source


class AssetChangeByExternalID:
    """Changes applied to asset"""
    update: AssetChangeByExternalIdUpdate
    """The external ID provided by the client. Must be unique within the project."""
    external_id: str

    def __init__(self, update: AssetChangeByExternalIdUpdate, external_id: str) -> None:
        self.update = update
        self.external_id = external_id
