from typing import Optional, Dict, List


class DataAssetItem:
    """A representation of a physical asset, for example a factory or a piece of equipment."""
    """The description of the asset."""
    description: Optional[str]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the asset."""
    name: str
    """A JavaScript-friendly internal ID for the object."""
    parent_id: Optional[int]
    """The source of the asset."""
    source: Optional[str]
    """A JavaScript-friendly internal ID for the object."""
    id: int
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    created_time: int
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    last_updated_time: int
    """A JavaScript-friendly internal ID for the object."""
    root_id: int

    def __init__(self, description: Optional[str], external_id: Optional[str], metadata: Optional[Dict[str, str]], name: str, parent_id: Optional[int], source: Optional[str], id: int, created_time: int, last_updated_time: int, root_id: int) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.parent_id = parent_id
        self.source = source
        self.id = id
        self.created_time = created_time
        self.last_updated_time = last_updated_time
        self.root_id = root_id


class DataAsset:
    items: List[DataAssetItem]

    def __init__(self, items: List[DataAssetItem]) -> None:
        self.items = items
