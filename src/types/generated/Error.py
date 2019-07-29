from typing import Optional, List, Dict, Any


class Error:
    """Cognite API error"""
    """HTTP status code"""
    code: int
    """List of objects that are not unique."""
    duplicated: Optional[List[Dict[str, Any]]]
    """Error message"""
    message: str
    """List of lookup objects that do not match any results."""
    missing: Optional[List[Dict[str, Any]]]

    def __init__(self, code: int, duplicated: Optional[List[Dict[str, Any]]], message: str, missing: Optional[List[Dict[str, Any]]]) -> None:
        self.code = code
        self.duplicated = duplicated
        self.message = message
        self.missing = missing
