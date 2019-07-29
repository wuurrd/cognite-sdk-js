from typing import List, Dict, Any


class MissingFieldErrorError:
    """HTTP status code"""
    code: int
    """Error message"""
    message: str
    """Fields that are missing."""
    missing_fields: List[Dict[str, Any]]

    def __init__(self, code: int, message: str, missing_fields: List[Dict[str, Any]]) -> None:
        self.code = code
        self.message = message
        self.missing_fields = missing_fields


class MissingFieldError:
    error: MissingFieldErrorError

    def __init__(self, error: MissingFieldErrorError) -> None:
        self.error = error
