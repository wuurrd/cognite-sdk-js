from typing import Optional


class LoginURLDTO:
    """Represents an url where the user can be redirected to sign in."""
    """The url where the user can be redirected to sign in."""
    url: Optional[str]

    def __init__(self, url: Optional[str]) -> None:
        self.url = url
