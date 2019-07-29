from enum import Enum
from typing import Optional, Dict, Any, List


class EventAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class CogniteeventsAclAclEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteeventsACLACL:
    actions: List[EventAction]
    scope: CogniteeventsAclAclEventScope

    def __init__(self, actions: List[EventAction], scope: CogniteeventsAclAclEventScope) -> None:
        self.actions = actions
        self.scope = scope
