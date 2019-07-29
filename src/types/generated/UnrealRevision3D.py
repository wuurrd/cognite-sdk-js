from typing import Optional, List, Dict
from enum import Enum


class UnrealRevision3DCamera:
    """Initial camera position and target."""
    """Initial camera position."""
    position: Optional[List[float]]
    """Initial camera target."""
    target: Optional[List[float]]

    def __init__(self, position: Optional[List[float]], target: Optional[List[float]]) -> None:
        self.position = position
        self.target = target


class UnrealRevision3DSceneThreedFile:
    """The file ID of the data file for this resource, with multiple versions supported. Use
    /3d/files/{id} to retrieve the file.
    """
    """File ID. Use /3d/files/{id} to retrieve the file."""
    file_id: int
    """Version of the file format."""
    version: int

    def __init__(self, file_id: int, version: int) -> None:
        self.file_id = file_id
        self.version = version


class Status(Enum):
    """The status of the revision."""
    DONE = "Done"
    FAILED = "Failed"
    PROCESSING = "Processing"
    QUEUED = "Queued"


class UnrealRevision3D:
    """The number of asset mappings for this revision."""
    asset_mapping_count: int
    """Initial camera position and target."""
    camera: Optional[UnrealRevision3DCamera]
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
    scene_threed_files: List[UnrealRevision3DSceneThreedFile]

    def __init__(self, asset_mapping_count: int, camera: Optional[UnrealRevision3DCamera], created_time: int, file_id: int, id: int, metadata: Optional[Dict[str, str]], published: bool, rotation: Optional[List[float]], status: Status, thumbnail_threed_file_id: Optional[int], thumbnail_url: Optional[str], scene_threed_files: List[UnrealRevision3DSceneThreedFile]) -> None:
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
        self.scene_threed_files = scene_threed_files
