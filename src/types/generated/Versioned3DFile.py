class Versioned3DFile:
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
