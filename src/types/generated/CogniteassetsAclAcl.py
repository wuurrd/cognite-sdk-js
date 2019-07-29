from enum import Enum
from typing import Optional, Dict, Any, List


class AssetAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class CogniteassetsAclAclAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteassetsACLACL:
    actions: List[AssetAction]
    scope: CogniteassetsAclAclAssetScope

    def __init__(self, actions: List[AssetAction], scope: CogniteassetsAclAclAssetScope) -> None:
        self.actions = actions
        self.scope = scope
