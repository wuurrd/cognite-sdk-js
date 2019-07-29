from enum import Enum
from typing import Optional, Dict, Any, List


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class CognitethreedAclAclThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CognitethreedACLACL:
    actions: List[ThreedAction]
    scope: CognitethreedAclAclThreedScope

    def __init__(self, actions: List[ThreedAction], scope: CognitethreedAclAclThreedScope) -> None:
        self.actions = actions
        self.scope = scope
