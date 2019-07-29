from typing import List


class BoundingBox3D:
    """The bounding box of the subtree with this sector as the root sector. Is null if there are
    no geometries in the subtree.
    """
    max: List[float]
    min: List[float]

    def __init__(self, max: List[float], min: List[float]) -> None:
        self.max = max
        self.min = min
