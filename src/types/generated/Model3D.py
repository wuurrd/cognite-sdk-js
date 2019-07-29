from typing import Optional, Dict


class Model3D:
    """The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC."""
    created_time: int
    """The ID of the model."""
    id: int
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the model."""
    name: str

    def __init__(self, created_time: int, id: int, metadata: Optional[Dict[str, str]], name: str) -> None:
        self.created_time = created_time
        self.id = id
        self.metadata = metadata
        self.name = name
