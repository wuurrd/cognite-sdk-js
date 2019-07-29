from typing import Optional, List, Dict


class UpdateRevision3DSet:
    """Initial camera position and target."""
    """Initial camera position."""
    position: Optional[List[float]]
    """Initial camera target."""
    target: Optional[List[float]]

    def __init__(self, position: Optional[List[float]], target: Optional[List[float]]) -> None:
        self.position = position
        self.target = target


class UpdateRevision3DCamera:
    """Initial camera position and target."""
    set: Optional[UpdateRevision3DSet]

    def __init__(self, set: Optional[UpdateRevision3DSet]) -> None:
        self.set = set


class UpdateRevision3DMetadata:
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


class Published:
    """True if the revision is marked as published."""
    set: Optional[bool]

    def __init__(self, set: Optional[bool]) -> None:
        self.set = set


class Rotation:
    set: Optional[List[float]]

    def __init__(self, set: Optional[List[float]]) -> None:
        self.set = set


class UpdateRevision3DUpdate:
    camera: Optional[UpdateRevision3DCamera]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[UpdateRevision3DMetadata]
    published: Optional[Published]
    rotation: Optional[Rotation]

    def __init__(self, camera: Optional[UpdateRevision3DCamera], metadata: Optional[UpdateRevision3DMetadata], published: Optional[Published], rotation: Optional[Rotation]) -> None:
        self.camera = camera
        self.metadata = metadata
        self.published = published
        self.rotation = rotation


class UpdateRevision3D:
    """A JavaScript-friendly internal ID for the object."""
    id: int
    update: Optional[UpdateRevision3DUpdate]

    def __init__(self, id: int, update: Optional[UpdateRevision3DUpdate]) -> None:
        self.id = id
        self.update = update
