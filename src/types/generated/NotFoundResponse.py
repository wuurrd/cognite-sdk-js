from typing import Optional, List


class Missing:
    """Ids or ExternalIds that are not found."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class NotFoundResponseError:
    """Error details."""
    """HTTP status code"""
    code: int
    """Error message."""
    message: str
    """Items that are not found."""
    missing: List[Missing]

    def __init__(self, code: int, message: str, missing: List[Missing]) -> None:
        self.code = code
        self.message = message
        self.missing = missing


class NotFoundResponse:
    """Error details."""
    error: NotFoundResponseError

    def __init__(self, error: NotFoundResponseError) -> None:
        self.error = error
