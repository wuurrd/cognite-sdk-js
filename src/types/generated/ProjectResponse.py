from typing import Optional, List


class Authentication:
    """Data about how to authenticate and authorize users. The authentication configuration is
    hidden.
    """
    """List of valid domains. If left empty, any user registered with the OAuth2 provider will
    get access.
    """
    valid_domains: Optional[List[str]]

    def __init__(self, valid_domains: Optional[List[str]]) -> None:
        self.valid_domains = valid_domains


class ProjectResponse:
    """Data about how to authenticate and authorize users. The authentication configuration is
    hidden.
    """
    authentication: Optional[Authentication]
    """A default group for all project users. Can be used to establish default
    capabilities.WARNING: this group may be logically deleted
    """
    default_group_id: Optional[int]
    """The display name of the project."""
    name: str
    """The url name of the project. This is used as part of API calls. It should only contain
    letters, digits and hyphens, as long as the hyphens are not at the start or end.
    """
    url_name: str

    def __init__(self, authentication: Optional[Authentication], default_group_id: Optional[int], name: str, url_name: str) -> None:
        self.authentication = authentication
        self.default_group_id = default_group_id
        self.name = name
        self.url_name = url_name
