from enum import Enum
from typing import Optional, Dict, Any, List


class SequencesAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class CognitesequencesAclAclSequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CognitesequencesACLACL:
    actions: List[SequencesAction]
    scope: CognitesequencesAclAclSequencesScope

    def __init__(self, actions: List[SequencesAction], scope: CognitesequencesAclAclSequencesScope) -> None:
        self.actions = actions
        self.scope = scope
