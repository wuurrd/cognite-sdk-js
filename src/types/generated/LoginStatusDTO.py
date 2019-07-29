from typing import Optional


class LoginStatusDTO:
    """Represents the current authentication status of the request"""
    """ID of the api key making the request. This is optional and only present if an api key is
    used as authentication.
    """
    api_key_id: Optional[int]
    """Whether the user is logged in or not."""
    logged_in: bool
    """Name of project user belongs to"""
    project: str
    """Internal project id of the project"""
    project_id: int
    """The user principal, e.g john.doe@corporation.com."""
    user: str

    def __init__(self, api_key_id: Optional[int], logged_in: bool, project: str, project_id: int, user: str) -> None:
        self.api_key_id = api_key_id
        self.logged_in = logged_in
        self.project = project
        self.project_id = project_id
        self.user = user
