from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class CogniteanalyticsAclAclAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteanalyticsACLACL:
    actions: List[AnalyticsAction]
    scope: CogniteanalyticsAclAclAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: CogniteanalyticsAclAclAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope
