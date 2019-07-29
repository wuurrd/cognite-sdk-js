from typing import Optional, List, Dict


class DataFileChangeAssetIDS:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class DataFileChangeExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataFileChangeMetadata:
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


class DataFileChangeSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataFileChangeUpdate:
    """Change that will be applied to the array object."""
    asset_ids: Optional[DataFileChangeAssetIDS]
    """Removable string change."""
    external_id: Optional[DataFileChangeExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[DataFileChangeMetadata]
    """Removable string change."""
    source: Optional[DataFileChangeSource]

    def __init__(self, asset_ids: Optional[DataFileChangeAssetIDS], external_id: Optional[DataFileChangeExternalID], metadata: Optional[DataFileChangeMetadata], source: Optional[DataFileChangeSource]) -> None:
        self.asset_ids = asset_ids
        self.external_id = external_id
        self.metadata = metadata
        self.source = source


class DataFileChangeItem:
    """Changes will be applied to file."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    update: DataFileChangeUpdate
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], update: DataFileChangeUpdate, external_id: Optional[str]) -> None:
        self.id = id
        self.update = update
        self.external_id = external_id


class DataFileChange:
    items: List[DataFileChangeItem]

    def __init__(self, items: List[DataFileChangeItem]) -> None:
        self.items = items
