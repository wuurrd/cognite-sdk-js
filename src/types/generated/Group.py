from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class GroupAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLAnalytics:
    actions: List[AnalyticsAction]
    scope: GroupAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: GroupAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope


class ApikeysACLAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class GroupApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupACLApikey:
    actions: List[ApikeysACLAction]
    scope: GroupApikeyScope

    def __init__(self, actions: List[ApikeysACLAction], scope: GroupApikeyScope) -> None:
        self.actions = actions
        self.scope = scope


class AssetsACLAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class GroupAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLAsset:
    actions: List[AssetsACLAction]
    scope: GroupAssetScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupAssetScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLEvent:
    actions: List[AssetsACLAction]
    scope: GroupEventScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupEventScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLFile:
    actions: List[AssetsACLAction]
    scope: GroupFileScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupFileScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupACLGroup:
    actions: List[GroupAction]
    scope: GroupGroupScope

    def __init__(self, actions: List[GroupAction], scope: GroupGroupScope) -> None:
        self.actions = actions
        self.scope = scope


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLProject:
    actions: List[ProjectAction]
    scope: GroupProjectScope

    def __init__(self, actions: List[ProjectAction], scope: GroupProjectScope) -> None:
        self.actions = actions
        self.scope = scope


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class GroupRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLRaw:
    actions: List[RawAction]
    scope: GroupRawScope

    def __init__(self, actions: List[RawAction], scope: GroupRawScope) -> None:
        self.actions = actions
        self.scope = scope


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class GroupSecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLSecurityCategory:
    actions: List[SecurityCategoryAction]
    scope: GroupSecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: GroupSecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLSequences:
    actions: List[AssetsACLAction]
    scope: GroupSequencesScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupSequencesScope) -> None:
        self.actions = actions
        self.scope = scope


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupACLThreed:
    actions: List[ThreedAction]
    scope: GroupThreedScope

    def __init__(self, actions: List[ThreedAction], scope: GroupThreedScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class GroupScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class GroupTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[GroupScopeAssetIDScope]
    idscope: Optional[GroupScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[GroupScopeAssetIDScope], idscope: Optional[GroupScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class GroupACLTimeseries:
    actions: List[AssetsACLAction]
    scope: GroupTimeseriesScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupUserScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupACLUser:
    actions: List[ApikeysACLAction]
    scope: GroupUserScope

    def __init__(self, actions: List[ApikeysACLAction], scope: GroupUserScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupCapability:
    groups_acl: Optional[GroupACLGroup]
    assets_acl: Optional[GroupACLAsset]
    events_acl: Optional[GroupACLEvent]
    files_acl: Optional[GroupACLFile]
    users_acl: Optional[GroupACLUser]
    projects_acl: Optional[GroupACLProject]
    security_categories_acl: Optional[GroupACLSecurityCategory]
    raw_acl: Optional[GroupACLRaw]
    time_series_acl: Optional[GroupACLTimeseries]
    apikeys_acl: Optional[GroupACLApikey]
    threed_acl: Optional[GroupACLThreed]
    sequences_acl: Optional[GroupACLSequences]
    analytics_acl: Optional[GroupACLAnalytics]

    def __init__(self, groups_acl: Optional[GroupACLGroup], assets_acl: Optional[GroupACLAsset], events_acl: Optional[GroupACLEvent], files_acl: Optional[GroupACLFile], users_acl: Optional[GroupACLUser], projects_acl: Optional[GroupACLProject], security_categories_acl: Optional[GroupACLSecurityCategory], raw_acl: Optional[GroupACLRaw], time_series_acl: Optional[GroupACLTimeseries], apikeys_acl: Optional[GroupACLApikey], threed_acl: Optional[GroupACLThreed], sequences_acl: Optional[GroupACLSequences], analytics_acl: Optional[GroupACLAnalytics]) -> None:
        self.groups_acl = groups_acl
        self.assets_acl = assets_acl
        self.events_acl = events_acl
        self.files_acl = files_acl
        self.users_acl = users_acl
        self.projects_acl = projects_acl
        self.security_categories_acl = security_categories_acl
        self.raw_acl = raw_acl
        self.time_series_acl = time_series_acl
        self.apikeys_acl = apikeys_acl
        self.threed_acl = threed_acl
        self.sequences_acl = sequences_acl
        self.analytics_acl = analytics_acl


class Group:
    capabilities: Optional[List[GroupCapability]]
    deleted_time: Optional[int]
    id: int
    is_deleted: bool
    """Name of the group"""
    name: str
    """ID of the group in the source. If this is the same ID as a group in the IDP, a user in
    that group will implicitly be a part of this group as well.
    """
    source_id: Optional[str]

    def __init__(self, capabilities: Optional[List[GroupCapability]], deleted_time: Optional[int], id: int, is_deleted: bool, name: str, source_id: Optional[str]) -> None:
        self.capabilities = capabilities
        self.deleted_time = deleted_time
        self.id = id
        self.is_deleted = is_deleted
        self.name = name
        self.source_id = source_id
