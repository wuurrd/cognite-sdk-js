from enum import Enum
from typing import Optional, Dict, Any, List


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class CognitegroupsAclAclGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class CognitegroupsACLACL:
    actions: List[GroupAction]
    scope: CognitegroupsAclAclGroupScope

    def __init__(self, actions: List[GroupAction], scope: CognitegroupsAclAclGroupScope) -> None:
        self.actions = actions
        self.scope = scope
