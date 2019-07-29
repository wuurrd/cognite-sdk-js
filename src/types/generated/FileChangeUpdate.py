from typing import Optional, List, Dict


class FileChangeUpdateAssetIDS:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class FileChangeUpdateExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class FileChangeUpdateMetadata:
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


class FileChangeUpdateSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class FileChangeUpdateUpdate:
    """Change that will be applied to the array object."""
    asset_ids: Optional[FileChangeUpdateAssetIDS]
    """Removable string change."""
    external_id: Optional[FileChangeUpdateExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[FileChangeUpdateMetadata]
    """Removable string change."""
    source: Optional[FileChangeUpdateSource]

    def __init__(self, asset_ids: Optional[FileChangeUpdateAssetIDS], external_id: Optional[FileChangeUpdateExternalID], metadata: Optional[FileChangeUpdateMetadata], source: Optional[FileChangeUpdateSource]) -> None:
        self.asset_ids = asset_ids
        self.external_id = external_id
        self.metadata = metadata
        self.source = source


class FileChangeUpdate:
    """Changes will be applied to file."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    update: FileChangeUpdateUpdate
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], update: FileChangeUpdateUpdate, external_id: Optional[str]) -> None:
        self.id = id
        self.update = update
        self.external_id = external_id
