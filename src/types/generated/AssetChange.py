from typing import Optional, Dict, List


class AssetChangeDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeMetadata:
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


class AssetChangeName:
    """Non-removable string change."""
    set: str

    def __init__(self, set: str) -> None:
        self.set = set


class AssetChangeSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetChangeUpdate:
    """Removable string change."""
    description: Optional[AssetChangeDescription]
    """Removable string change."""
    external_id: Optional[AssetChangeExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[AssetChangeMetadata]
    """Non-removable string change."""
    name: Optional[AssetChangeName]
    """Removable string change."""
    source: Optional[AssetChangeSource]

    def __init__(self, description: Optional[AssetChangeDescription], external_id: Optional[AssetChangeExternalID], metadata: Optional[AssetChangeMetadata], name: Optional[AssetChangeName], source: Optional[AssetChangeSource]) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.source = source


class AssetChange:
    """Changes applied to asset"""
    update: AssetChangeUpdate
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, update: AssetChangeUpdate, id: Optional[int], external_id: Optional[str]) -> None:
        self.update = update
        self.id = id
        self.external_id = external_id
