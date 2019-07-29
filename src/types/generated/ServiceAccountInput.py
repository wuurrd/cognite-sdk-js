from typing import Optional, List


class ServiceAccountInput:
    """List of group ids"""
    groups: Optional[List[int]]
    """Unique name of the service account"""
    name: str

    def __init__(self, groups: Optional[List[int]], name: str) -> None:
        self.groups = groups
        self.name = name
