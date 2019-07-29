from typing import Optional, Dict, List


class UpdateModel3DMetadata:
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


class UpdateModel3DName:
    set: Optional[str]

    def __init__(self, set: Optional[str]) -> None:
        self.set = set


class UpdateModel3DUpdate:
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[UpdateModel3DMetadata]
    name: Optional[UpdateModel3DName]

    def __init__(self, metadata: Optional[UpdateModel3DMetadata], name: Optional[UpdateModel3DName]) -> None:
        self.metadata = metadata
        self.name = name


class UpdateModel3D:
    """A JavaScript-friendly internal ID for the object."""
    id: int
    update: Optional[UpdateModel3DUpdate]

    def __init__(self, id: int, update: Optional[UpdateModel3DUpdate]) -> None:
        self.id = id
        self.update = update
