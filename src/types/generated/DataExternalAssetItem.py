from typing import Optional, Dict


class DataExternalAssetItem:
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
    """The external ID provided by the client. Must be unique within the project."""
    parent_external_id: Optional[str]

    def __init__(self, description: Optional[str], external_id: Optional[str], metadata: Optional[Dict[str, str]], name: str, parent_id: Optional[int], source: Optional[str], parent_external_id: Optional[str]) -> None:
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.parent_id = parent_id
        self.source = source
        self.parent_external_id = parent_external_id
