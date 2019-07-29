from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class GroupResponseAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLAnalytics:
    actions: List[AnalyticsAction]
    scope: GroupResponseAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: GroupResponseAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope


class ApikeysACLAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class GroupResponseApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupResponseACLApikey:
    actions: List[ApikeysACLAction]
    scope: GroupResponseApikeyScope

    def __init__(self, actions: List[ApikeysACLAction], scope: GroupResponseApikeyScope) -> None:
        self.actions = actions
        self.scope = scope


class AssetsACLAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class GroupResponseAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLAsset:
    actions: List[AssetsACLAction]
    scope: GroupResponseAssetScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupResponseAssetScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupResponseEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLEvent:
    actions: List[AssetsACLAction]
    scope: GroupResponseEventScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupResponseEventScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupResponseFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLFile:
    actions: List[AssetsACLAction]
    scope: GroupResponseFileScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupResponseFileScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupResponseGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupResponseACLGroup:
    actions: List[GroupAction]
    scope: GroupResponseGroupScope

    def __init__(self, actions: List[GroupAction], scope: GroupResponseGroupScope) -> None:
        self.actions = actions
        self.scope = scope


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupResponseProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLProject:
    actions: List[ProjectAction]
    scope: GroupResponseProjectScope

    def __init__(self, actions: List[ProjectAction], scope: GroupResponseProjectScope) -> None:
        self.actions = actions
        self.scope = scope


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class GroupResponseRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLRaw:
    actions: List[RawAction]
    scope: GroupResponseRawScope

    def __init__(self, actions: List[RawAction], scope: GroupResponseRawScope) -> None:
        self.actions = actions
        self.scope = scope


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class GroupResponseSecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLSecurityCategory:
    actions: List[SecurityCategoryAction]
    scope: GroupResponseSecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: GroupResponseSecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupResponseSequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLSequences:
    actions: List[AssetsACLAction]
    scope: GroupResponseSequencesScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupResponseSequencesScope) -> None:
        self.actions = actions
        self.scope = scope


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupResponseThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupResponseACLThreed:
    actions: List[ThreedAction]
    scope: GroupResponseThreedScope

    def __init__(self, actions: List[ThreedAction], scope: GroupResponseThreedScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupResponseScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class GroupResponseScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class GroupResponseTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[GroupResponseScopeAssetIDScope]
    idscope: Optional[GroupResponseScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[GroupResponseScopeAssetIDScope], idscope: Optional[GroupResponseScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class GroupResponseACLTimeseries:
    actions: List[AssetsACLAction]
    scope: GroupResponseTimeseriesScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupResponseTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupResponseUserScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupResponseACLUser:
    actions: List[ApikeysACLAction]
    scope: GroupResponseUserScope

    def __init__(self, actions: List[ApikeysACLAction], scope: GroupResponseUserScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupResponseCapability:
    groups_acl: Optional[GroupResponseACLGroup]
    assets_acl: Optional[GroupResponseACLAsset]
    events_acl: Optional[GroupResponseACLEvent]
    files_acl: Optional[GroupResponseACLFile]
    users_acl: Optional[GroupResponseACLUser]
    projects_acl: Optional[GroupResponseACLProject]
    security_categories_acl: Optional[GroupResponseACLSecurityCategory]
    raw_acl: Optional[GroupResponseACLRaw]
    time_series_acl: Optional[GroupResponseACLTimeseries]
    apikeys_acl: Optional[GroupResponseACLApikey]
    threed_acl: Optional[GroupResponseACLThreed]
    sequences_acl: Optional[GroupResponseACLSequences]
    analytics_acl: Optional[GroupResponseACLAnalytics]

    def __init__(self, groups_acl: Optional[GroupResponseACLGroup], assets_acl: Optional[GroupResponseACLAsset], events_acl: Optional[GroupResponseACLEvent], files_acl: Optional[GroupResponseACLFile], users_acl: Optional[GroupResponseACLUser], projects_acl: Optional[GroupResponseACLProject], security_categories_acl: Optional[GroupResponseACLSecurityCategory], raw_acl: Optional[GroupResponseACLRaw], time_series_acl: Optional[GroupResponseACLTimeseries], apikeys_acl: Optional[GroupResponseACLApikey], threed_acl: Optional[GroupResponseACLThreed], sequences_acl: Optional[GroupResponseACLSequences], analytics_acl: Optional[GroupResponseACLAnalytics]) -> None:
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


class GroupResponseItem:
    capabilities: Optional[List[GroupResponseCapability]]
    deleted_time: Optional[int]
    id: int
    is_deleted: bool
    """Name of the group"""
    name: str
    """ID of the group in the source. If this is the same ID as a group in the IDP, a user in
    that group will implicitly be a part of this group as well.
    """
    source_id: Optional[str]

    def __init__(self, capabilities: Optional[List[GroupResponseCapability]], deleted_time: Optional[int], id: int, is_deleted: bool, name: str, source_id: Optional[str]) -> None:
        self.capabilities = capabilities
        self.deleted_time = deleted_time
        self.id = id
        self.is_deleted = is_deleted
        self.name = name
        self.source_id = source_id


class GroupResponse:
    items: List[GroupResponseItem]

    def __init__(self, items: List[GroupResponseItem]) -> None:
        self.items = items
