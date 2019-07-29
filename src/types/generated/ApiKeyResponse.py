from enum import Enum
from typing import List


class Status(Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


class APIKeyObject:
    """The time of creation in Unix milliseconds."""
    created_time: int
    """The ID of the API key."""
    id: int
    """The ID of the service account."""
    service_account_id: int
    status: Status

    def __init__(self, created_time: int, id: int, service_account_id: int, status: Status) -> None:
        self.created_time = created_time
        self.id = id
        self.service_account_id = service_account_id
        self.status = status


class APIKeyResponse:
    items: List[APIKeyObject]

    def __init__(self, items: List[APIKeyObject]) -> None:
        self.items = items
