from typing import List


class AssetMapping3DListItem:
    """The ID of the associated asset (Cognite's Assets API)."""
    asset_id: int
    """The ID of the node."""
    node_id: int
    """The number of nodes in the subtree of this node (this number included the node itself)."""
    subtree_size: int
    """A number describing the position of this node in the 3D hierarchy, starting from 0. The
    tree is traversed in a depth-first order.
    """
    tree_index: int

    def __init__(self, asset_id: int, node_id: int, subtree_size: int, tree_index: int) -> None:
        self.asset_id = asset_id
        self.node_id = node_id
        self.subtree_size = subtree_size
        self.tree_index = tree_index


class AssetMapping3DList:
    items: List[AssetMapping3DListItem]

    def __init__(self, items: List[AssetMapping3DListItem]) -> None:
        self.items = items
