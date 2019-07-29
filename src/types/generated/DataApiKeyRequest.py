from typing import List


class DataApiKeyRequestItem:
    service_account_id: int

    def __init__(self, service_account_id: int) -> None:
        self.service_account_id = service_account_id


class DataAPIKeyRequest:
    items: List[DataApiKeyRequestItem]

    def __init__(self, items: List[DataApiKeyRequestItem]) -> None:
        self.items = items
