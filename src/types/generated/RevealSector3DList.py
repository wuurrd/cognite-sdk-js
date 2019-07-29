from typing import List


class RevealSector3DListBoundingBox:
    """The bounding box of the subtree with this sector as the root sector. Is null if there are
    no geometries in the subtree.
    """
    max: List[float]
    min: List[float]

    def __init__(self, max: List[float], min: List[float]) -> None:
        self.max = max
        self.min = min


class RevealSector3DListThreedFile:
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


class RevealSector3DListItem:
    """The bounding box of the subtree with this sector as the root sector. Is null if there are
    no geometries in the subtree.
    """
    bounding_box: RevealSector3DListBoundingBox
    """The depth of the sector in the sector tree, starting from 0 at the root sector."""
    depth: int
    """The id of the sector."""
    id: int
    """The parent of the sector, null if it is the root sector."""
    parent_id: int
    """String representing the path to the sector: 0/2/6/ etc."""
    path: str
    """The file ID of the data file for this sector, with multiple versions supported. Use
    /3d/files/{id} to retrieve the file.
    """
    threed_files: List[RevealSector3DListThreedFile]

    def __init__(self, bounding_box: RevealSector3DListBoundingBox, depth: int, id: int, parent_id: int, path: str, threed_files: List[RevealSector3DListThreedFile]) -> None:
        self.bounding_box = bounding_box
        self.depth = depth
        self.id = id
        self.parent_id = parent_id
        self.path = path
        self.threed_files = threed_files


class RevealSector3DList:
    items: List[RevealSector3DListItem]

    def __init__(self, items: List[RevealSector3DListItem]) -> None:
        self.items = items
