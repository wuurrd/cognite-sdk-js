class CreateAssetMapping3D:
    """The ID of the associated asset (Cognite's Assets API)."""
    asset_id: int
    """The ID of the node."""
    node_id: int

    def __init__(self, asset_id: int, node_id: int) -> None:
        self.asset_id = asset_id
        self.node_id = node_id
