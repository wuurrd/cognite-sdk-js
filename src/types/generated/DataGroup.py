from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class DataGroupAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLAnalytics:
    actions: List[AnalyticsAction]
    scope: DataGroupAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: DataGroupAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope


class ApikeysACLAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class DataGroupApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class DataGroupACLApikey:
    actions: List[ApikeysACLAction]
    scope: DataGroupApikeyScope

    def __init__(self, actions: List[ApikeysACLAction], scope: DataGroupApikeyScope) -> None:
        self.actions = actions
        self.scope = scope


class AssetsACLAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class DataGroupAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLAsset:
    actions: List[AssetsACLAction]
    scope: DataGroupAssetScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupAssetScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLEvent:
    actions: List[AssetsACLAction]
    scope: DataGroupEventScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupEventScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLFile:
    actions: List[AssetsACLAction]
    scope: DataGroupFileScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupFileScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class DataGroupGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class DataGroupACLGroup:
    actions: List[GroupAction]
    scope: DataGroupGroupScope

    def __init__(self, actions: List[GroupAction], scope: DataGroupGroupScope) -> None:
        self.actions = actions
        self.scope = scope


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class DataGroupProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLProject:
    actions: List[ProjectAction]
    scope: DataGroupProjectScope

    def __init__(self, actions: List[ProjectAction], scope: DataGroupProjectScope) -> None:
        self.actions = actions
        self.scope = scope


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class DataGroupRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLRaw:
    actions: List[RawAction]
    scope: DataGroupRawScope

    def __init__(self, actions: List[RawAction], scope: DataGroupRawScope) -> None:
        self.actions = actions
        self.scope = scope


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class DataGroupSecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLSecurityCategory:
    actions: List[SecurityCategoryAction]
    scope: DataGroupSecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: DataGroupSecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLSequences:
    actions: List[AssetsACLAction]
    scope: DataGroupSequencesScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupSequencesScope) -> None:
        self.actions = actions
        self.scope = scope


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class DataGroupThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupACLThreed:
    actions: List[ThreedAction]
    scope: DataGroupThreedScope

    def __init__(self, actions: List[ThreedAction], scope: DataGroupThreedScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class DataGroupScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class DataGroupTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[DataGroupScopeAssetIDScope]
    idscope: Optional[DataGroupScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[DataGroupScopeAssetIDScope], idscope: Optional[DataGroupScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class DataGroupACLTimeseries:
    actions: List[AssetsACLAction]
    scope: DataGroupTimeseriesScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupUserScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class DataGroupACLUser:
    actions: List[ApikeysACLAction]
    scope: DataGroupUserScope

    def __init__(self, actions: List[ApikeysACLAction], scope: DataGroupUserScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupCapability:
    groups_acl: Optional[DataGroupACLGroup]
    assets_acl: Optional[DataGroupACLAsset]
    events_acl: Optional[DataGroupACLEvent]
    files_acl: Optional[DataGroupACLFile]
    users_acl: Optional[DataGroupACLUser]
    projects_acl: Optional[DataGroupACLProject]
    security_categories_acl: Optional[DataGroupACLSecurityCategory]
    raw_acl: Optional[DataGroupACLRaw]
    time_series_acl: Optional[DataGroupACLTimeseries]
    apikeys_acl: Optional[DataGroupACLApikey]
    threed_acl: Optional[DataGroupACLThreed]
    sequences_acl: Optional[DataGroupACLSequences]
    analytics_acl: Optional[DataGroupACLAnalytics]

    def __init__(self, groups_acl: Optional[DataGroupACLGroup], assets_acl: Optional[DataGroupACLAsset], events_acl: Optional[DataGroupACLEvent], files_acl: Optional[DataGroupACLFile], users_acl: Optional[DataGroupACLUser], projects_acl: Optional[DataGroupACLProject], security_categories_acl: Optional[DataGroupACLSecurityCategory], raw_acl: Optional[DataGroupACLRaw], time_series_acl: Optional[DataGroupACLTimeseries], apikeys_acl: Optional[DataGroupACLApikey], threed_acl: Optional[DataGroupACLThreed], sequences_acl: Optional[DataGroupACLSequences], analytics_acl: Optional[DataGroupACLAnalytics]) -> None:
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


class DataGroupItem:
    capabilities: Optional[List[DataGroupCapability]]
    deleted_time: Optional[int]
    id: int
    is_deleted: bool
    """Name of the group"""
    name: str
    """ID of the group in the source. If this is the same ID as a group in the IDP, a user in
    that group will implicitly be a part of this group as well.
    """
    source_id: Optional[str]

    def __init__(self, capabilities: Optional[List[DataGroupCapability]], deleted_time: Optional[int], id: int, is_deleted: bool, name: str, source_id: Optional[str]) -> None:
        self.capabilities = capabilities
        self.deleted_time = deleted_time
        self.id = id
        self.is_deleted = is_deleted
        self.name = name
        self.source_id = source_id


class DataGroup:
    items: List[DataGroupItem]

    def __init__(self, items: List[DataGroupItem]) -> None:
        self.items = items
