from enum import Enum
from typing import List


class Status(Enum):
    """The status of the API key."""
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


class NewApiKeyResponseItem:
    """The time of creation in Unix milliseconds."""
    created_time: int
    """The internal ID for the API key."""
    id: int
    """The ID of the service account."""
    service_account_id: int
    """The status of the API key."""
    status: Status
    """The API key to be used against the API."""
    value: str

    def __init__(self, created_time: int, id: int, service_account_id: int, status: Status, value: str) -> None:
        self.created_time = created_time
        self.id = id
        self.service_account_id = service_account_id
        self.status = status
        self.value = value


class NewAPIKeyResponse:
    items: List[NewApiKeyResponseItem]

    def __init__(self, items: List[NewApiKeyResponseItem]) -> None:
        self.items = items
