class UpdateRevision3DThumbnail:
    """Request body for the updateModelRevisionThumbnail endpoint."""
    """File ID of thumbnail file in Files API. _Only JPEG and PNG files are supported_."""
    file_id: int

    def __init__(self, file_id: int) -> None:
        self.file_id = file_id
