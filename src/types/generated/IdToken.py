from typing import List


class IDToken:
    """An ID JWT token"""
    """The expiration time of the token in seconds (unix)"""
    exp: int
    """Which groups (by id) the subject is in"""
    groups: List[int]
    """Which CDF project the subject is in"""
    project_name: str
    """The signing key id"""
    signing_key: str
    """The subject of the token"""
    sub: str

    def __init__(self, exp: int, groups: List[int], project_name: str, signing_key: str, sub: str) -> None:
        self.exp = exp
        self.groups = groups
        self.project_name = project_name
        self.signing_key = signing_key
        self.sub = sub
