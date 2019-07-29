class APIKeyRequest:
    service_account_id: int

    def __init__(self, service_account_id: int) -> None:
        self.service_account_id = service_account_id
