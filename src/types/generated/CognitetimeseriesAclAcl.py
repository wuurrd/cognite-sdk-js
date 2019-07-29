from enum import Enum
from typing import Optional, List, Dict, Any


class TimeseriesAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class CognitetimeseriesAclAclScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class CognitetimeseriesAclAclScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class CognitetimeseriesAclAclTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[CognitetimeseriesAclAclScopeAssetIDScope]
    idscope: Optional[CognitetimeseriesAclAclScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[CognitetimeseriesAclAclScopeAssetIDScope], idscope: Optional[CognitetimeseriesAclAclScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class CognitetimeseriesACLACL:
    actions: List[TimeseriesAction]
    scope: CognitetimeseriesAclAclTimeseriesScope

    def __init__(self, actions: List[TimeseriesAction], scope: CognitetimeseriesAclAclTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope
