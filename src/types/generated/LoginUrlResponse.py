from typing import Optional


class LoginUrlResponseData:
    """Represents an url where the user can be redirected to sign in."""
    """The url where the user can be redirected to sign in."""
    url: Optional[str]

    def __init__(self, url: Optional[str]) -> None:
        self.url = url


class LoginURLResponse:
    """Represents an url where the user can be redirected to sign in."""
    data: Optional[LoginUrlResponseData]

    def __init__(self, data: Optional[LoginUrlResponseData]) -> None:
        self.data = data
