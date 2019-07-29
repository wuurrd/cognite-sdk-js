from typing import Optional, Dict, List


class DataAssetChangeDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataAssetChangeExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataAssetChangeMetadata:
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


class DataAssetChangeName:
    """Non-removable string change."""
    set: str

    def __init__(self, set: str) -> None:
        self.set = set


class DataAssetChangeSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataAssetChangeUpdate:
    """Removable string change."""
    description: Optional[DataAssetChangeDescription]
    """Removable string change."""
    external_id: Optional[DataAssetChangeExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[DataAssetChangeMetadata]
    """Non-removable string change."""
    name: Optional[DataAssetChangeName]
    """Removable string change."""
    source: Optional[DataAssetChangeSource]

    def __init__(self, description: Optional[DataAssetChangeDescription], external_id: Optional[DataAssetChangeExternalID], metadata: Optional[DataAssetChangeMetadata], name: Optional[DataAssetChangeName], source: Optional[DataAssetChangeSource]) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.source = source


class DataAssetChangeItem:
    """Changes applied to asset"""
    update: DataAssetChangeUpdate
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, update: DataAssetChangeUpdate, id: Optional[int], external_id: Optional[str]) -> None:
        self.update = update
        self.id = id
        self.external_id = external_id


class DataAssetChange:
    items: List[DataAssetChangeItem]

    def __init__(self, items: List[DataAssetChangeItem]) -> None:
        self.items = items
