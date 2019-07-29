from typing import Optional, List, Dict
from enum import Enum


class Revision3DCamera:
    """Initial camera position and target."""
    """Initial camera position."""
    position: Optional[List[float]]
    """Initial camera target."""
    target: Optional[List[float]]

    def __init__(self, position: Optional[List[float]], target: Optional[List[float]]) -> None:
        self.position = position
        self.target = target


class Status(Enum):
    """The status of the revision."""
    DONE = "Done"
    FAILED = "Failed"
    PROCESSING = "Processing"
    QUEUED = "Queued"


class Revision3D:
    """The number of asset mappings for this revision."""
    asset_mapping_count: int
    """Initial camera position and target."""
    camera: Optional[Revision3DCamera]
    """The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC."""
    created_time: int
    """The file id."""
    file_id: int
    """The ID of the revision."""
    id: int
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """True if the revision is marked as published."""
    published: bool
    rotation: Optional[List[float]]
    """The status of the revision."""
    status: Status
    """The threed file ID of a thumbnail for the revision. Use /3d/files/{id} to retrieve the
    file.
    """
    thumbnail_threed_file_id: Optional[int]
    """The URL of a thumbnail for the revision."""
    thumbnail_url: Optional[str]

    def __init__(self, asset_mapping_count: int, camera: Optional[Revision3DCamera], created_time: int, file_id: int, id: int, metadata: Optional[Dict[str, str]], published: bool, rotation: Optional[List[float]], status: Status, thumbnail_threed_file_id: Optional[int], thumbnail_url: Optional[str]) -> None:
        self.asset_mapping_count = asset_mapping_count
        self.camera = camera
        self.created_time = created_time
        self.file_id = file_id
        self.id = id
        self.metadata = metadata
        self.published = published
        self.rotation = rotation
        self.status = status
        self.thumbnail_threed_file_id = thumbnail_threed_file_id
        self.thumbnail_url = thumbnail_url
