from typing import Optional, Dict


class CreateModel3D:
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the model."""
    name: str

    def __init__(self, metadata: Optional[Dict[str, str]], name: str) -> None:
        self.metadata = metadata
        self.name = name
