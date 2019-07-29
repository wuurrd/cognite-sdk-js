from typing import List


class Node3DBoundingBox:
    """The bounding box of the subtree with this sector as the root sector. Is null if there are
    no geometries in the subtree.
    """
    max: List[float]
    min: List[float]

    def __init__(self, max: List[float], min: List[float]) -> None:
        self.max = max
        self.min = min


class Node3D:
    """The bounding box of the subtree with this sector as the root sector. Is null if there are
    no geometries in the subtree.
    """
    bounding_box: Node3DBoundingBox
    """The depth of the node in the tree, starting from 0 at the root node."""
    depth: int
    """The ID of the node."""
    id: int
    """The name of the node."""
    name: str
    """The parent of the node, null if it is the root node."""
    parent_id: int
    """The number of descendants of the node, plus one (counting itself)."""
    subtree_size: int
    """The index of the node in the 3D model hierarchy, starting from 0. The tree is traversed
    in a depth-first order.
    """
    tree_index: int

    def __init__(self, bounding_box: Node3DBoundingBox, depth: int, id: int, name: str, parent_id: int, subtree_size: int, tree_index: int) -> None:
        self.bounding_box = bounding_box
        self.depth = depth
        self.id = id
        self.name = name
        self.parent_id = parent_id
        self.subtree_size = subtree_size
        self.tree_index = tree_index
