from typing import Optional, List


class ServiceAccount:
    """Time of deletion"""
    deleted_time: Optional[int]
    """List of group ids"""
    groups: List[int]
    id: int
    """If this service account has been logically deleted"""
    is_deleted: bool
    """Unique name of the service account"""
    name: str

    def __init__(self, deleted_time: Optional[int], groups: List[int], id: int, is_deleted: bool, name: str) -> None:
        self.deleted_time = deleted_time
        self.groups = groups
        self.id = id
        self.is_deleted = is_deleted
        self.name = name
