from enum import Enum
from typing import Optional, Dict, Any, List


class ApikeyAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class CogniteapikeysAclAclApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class CogniteapikeysACLACL:
    actions: List[ApikeyAction]
    scope: CogniteapikeysAclAclApikeyScope

    def __init__(self, actions: List[ApikeyAction], scope: CogniteapikeysAclAclApikeyScope) -> None:
        self.actions = actions
        self.scope = scope
