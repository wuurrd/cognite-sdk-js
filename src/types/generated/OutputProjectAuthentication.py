from typing import Optional, List


class OutputProjectAuthentication:
    """Data about how to authenticate and authorize users. The authentication configuration is
    hidden.
    """
    """List of valid domains. If left empty, any user registered with the OAuth2 provider will
    get access.
    """
    valid_domains: Optional[List[str]]

    def __init__(self, valid_domains: Optional[List[str]]) -> None:
        self.valid_domains = valid_domains
