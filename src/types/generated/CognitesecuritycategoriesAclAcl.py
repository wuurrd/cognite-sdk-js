from enum import Enum
from typing import Optional, Dict, Any, List


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class CognitesecuritycategoriesAclAclSecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CognitesecuritycategoriesACLACL:
    actions: List[SecurityCategoryAction]
    scope: CognitesecuritycategoriesAclAclSecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: CognitesecuritycategoriesAclAclSecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope
