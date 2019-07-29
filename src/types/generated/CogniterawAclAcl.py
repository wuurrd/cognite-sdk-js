from enum import Enum
from typing import Optional, Dict, Any, List


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class CogniterawAclAclRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniterawACLACL:
    actions: List[RawAction]
    scope: CogniterawAclAclRawScope

    def __init__(self, actions: List[RawAction], scope: CogniterawAclAclRawScope) -> None:
        self.actions = actions
        self.scope = scope
