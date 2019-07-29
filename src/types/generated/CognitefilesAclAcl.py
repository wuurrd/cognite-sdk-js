from enum import Enum
from typing import Optional, Dict, Any, List


class FileAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class CognitefilesAclAclFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CognitefilesACLACL:
    actions: List[FileAction]
    scope: CognitefilesAclAclFileScope

    def __init__(self, actions: List[FileAction], scope: CognitefilesAclAclFileScope) -> None:
        self.actions = actions
        self.scope = scope
