class SingleTokenStatusDTOResponseData:
    """Whether this token has expired"""
    expired: bool
    """The token that was sent for validation"""
    token: str
    """Whether this token is valid"""
    valid: bool

    def __init__(self, expired: bool, token: str, valid: bool) -> None:
        self.expired = expired
        self.token = token
        self.valid = valid


class SingleTokenStatusDTOResponse:
    data: SingleTokenStatusDTOResponseData

    def __init__(self, data: SingleTokenStatusDTOResponseData) -> None:
        self.data = data
