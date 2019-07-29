from typing import Optional, List, Dict, Any


class CognitetimeseriesAclScopeScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class CognitetimeseriesAclScopeScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class CognitetimeseriesACLScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[CognitetimeseriesAclScopeScopeAssetIDScope]
    idscope: Optional[CognitetimeseriesAclScopeScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[CognitetimeseriesAclScopeScopeAssetIDScope], idscope: Optional[CognitetimeseriesAclScopeScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope
