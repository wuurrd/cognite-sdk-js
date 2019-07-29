from typing import List


class ExternalIdsAlreadyExistResponseDuplicated:
    """ExternalIds that already exist."""
    """The external ID provided by the client. Must be unique within the project."""
    external_id: str

    def __init__(self, external_id: str) -> None:
        self.external_id = external_id


class ExternalIdsAlreadyExistResponseError:
    """Error details"""
    """HTTP status code"""
    code: int
    """Items that are duplicated."""
    duplicated: List[ExternalIdsAlreadyExistResponseDuplicated]
    """Error message"""
    message: str

    def __init__(self, code: int, duplicated: List[ExternalIdsAlreadyExistResponseDuplicated], message: str) -> None:
        self.code = code
        self.duplicated = duplicated
        self.message = message


class ExternalIDSAlreadyExistResponse:
    """Error details"""
    error: ExternalIdsAlreadyExistResponseError

    def __init__(self, error: ExternalIdsAlreadyExistResponseError) -> None:
        self.error = error
