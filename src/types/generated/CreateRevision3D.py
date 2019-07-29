from typing import Optional, List, Dict


class CreateRevision3DCamera:
    """Initial camera position and target."""
    """Initial camera position."""
    position: Optional[List[float]]
    """Initial camera target."""
    target: Optional[List[float]]

    def __init__(self, position: Optional[List[float]], target: Optional[List[float]]) -> None:
        self.position = position
        self.target = target


class CreateRevision3D:
    """Initial camera position and target."""
    camera: Optional[CreateRevision3DCamera]
    """The file id to a file uploaded to Cognite's Files API. Can only be set on revision
    creation, and can never be updated.
    """
    file_id: int
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """True if the revision is marked as published."""
    published: Optional[bool]
    rotation: Optional[List[float]]

    def __init__(self, camera: Optional[CreateRevision3DCamera], file_id: int, metadata: Optional[Dict[str, str]], published: Optional[bool], rotation: Optional[List[float]]) -> None:
        self.camera = camera
        self.file_id = file_id
        self.metadata = metadata
        self.published = published
        self.rotation = rotation
