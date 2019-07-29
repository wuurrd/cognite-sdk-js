from typing import Optional, List


class DuplicatedIdsInRequestResponseDuplicated:
    """Ids and ExternalIds that are duplicated in the request."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], external_id: Optional[str]) -> None:
        self.id = id
        self.external_id = external_id


class DuplicatedIdsInRequestResponseError:
    """Error details"""
    """HTTP status code"""
    code: int
    """Items that are duplicated."""
    duplicated: List[DuplicatedIdsInRequestResponseDuplicated]
    """Error message"""
    message: str

    def __init__(self, code: int, duplicated: List[DuplicatedIdsInRequestResponseDuplicated], message: str) -> None:
        self.code = code
        self.duplicated = duplicated
        self.message = message


class DuplicatedIDSInRequestResponse:
    """Error details"""
    error: DuplicatedIdsInRequestResponseError

    def __init__(self, error: DuplicatedIdsInRequestResponseError) -> None:
        self.error = error
