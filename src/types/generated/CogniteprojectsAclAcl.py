from enum import Enum
from typing import Optional, Dict, Any, List


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class CogniteprojectsAclAclProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteprojectsACLACL:
    actions: List[ProjectAction]
    scope: CogniteprojectsAclAclProjectScope

    def __init__(self, actions: List[ProjectAction], scope: CogniteprojectsAclAclProjectScope) -> None:
        self.actions = actions
        self.scope = scope
