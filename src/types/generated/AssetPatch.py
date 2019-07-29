from typing import Optional, Dict, List


class AssetPatchDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetPatchExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetPatchMetadata:
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


class AssetPatchName:
    """Non-removable string change."""
    set: str

    def __init__(self, set: str) -> None:
        self.set = set


class AssetPatchSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class AssetPatchUpdate:
    """Removable string change."""
    description: Optional[AssetPatchDescription]
    """Removable string change."""
    external_id: Optional[AssetPatchExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[AssetPatchMetadata]
    """Non-removable string change."""
    name: Optional[AssetPatchName]
    """Removable string change."""
    source: Optional[AssetPatchSource]

    def __init__(self, description: Optional[AssetPatchDescription], external_id: Optional[AssetPatchExternalID], metadata: Optional[AssetPatchMetadata], name: Optional[AssetPatchName], source: Optional[AssetPatchSource]) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.source = source


class AssetPatch:
    """Changes applied to asset"""
    update: AssetPatchUpdate

    def __init__(self, update: AssetPatchUpdate) -> None:
        self.update = update
