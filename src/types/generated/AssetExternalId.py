class AssetExternalID:
    """The external ID provided by the client. Must be unique within the project."""
    external_id: str

    def __init__(self, external_id: str) -> None:
        self.external_id = external_id
