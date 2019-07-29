from typing import Optional


class FileExternalID:
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, external_id: Optional[str]) -> None:
        self.external_id = external_id
