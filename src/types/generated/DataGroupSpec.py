from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class DataGroupSpecAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLAnalytics:
    actions: List[AnalyticsAction]
    scope: DataGroupSpecAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: DataGroupSpecAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope


class ApikeysACLAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class DataGroupSpecApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class DataGroupSpecACLApikey:
    actions: List[ApikeysACLAction]
    scope: DataGroupSpecApikeyScope

    def __init__(self, actions: List[ApikeysACLAction], scope: DataGroupSpecApikeyScope) -> None:
        self.actions = actions
        self.scope = scope


class AssetsACLAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class DataGroupSpecAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLAsset:
    actions: List[AssetsACLAction]
    scope: DataGroupSpecAssetScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupSpecAssetScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSpecEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLEvent:
    actions: List[AssetsACLAction]
    scope: DataGroupSpecEventScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupSpecEventScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSpecFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLFile:
    actions: List[AssetsACLAction]
    scope: DataGroupSpecFileScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupSpecFileScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class DataGroupSpecGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class DataGroupSpecACLGroup:
    actions: List[GroupAction]
    scope: DataGroupSpecGroupScope

    def __init__(self, actions: List[GroupAction], scope: DataGroupSpecGroupScope) -> None:
        self.actions = actions
        self.scope = scope


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class DataGroupSpecProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLProject:
    actions: List[ProjectAction]
    scope: DataGroupSpecProjectScope

    def __init__(self, actions: List[ProjectAction], scope: DataGroupSpecProjectScope) -> None:
        self.actions = actions
        self.scope = scope


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class DataGroupSpecRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLRaw:
    actions: List[RawAction]
    scope: DataGroupSpecRawScope

    def __init__(self, actions: List[RawAction], scope: DataGroupSpecRawScope) -> None:
        self.actions = actions
        self.scope = scope


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class DataGroupSpecSecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLSecurityCategory:
    actions: List[SecurityCategoryAction]
    scope: DataGroupSpecSecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: DataGroupSpecSecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSpecSequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLSequences:
    actions: List[AssetsACLAction]
    scope: DataGroupSpecSequencesScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupSpecSequencesScope) -> None:
        self.actions = actions
        self.scope = scope


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class DataGroupSpecThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class DataGroupSpecACLThreed:
    actions: List[ThreedAction]
    scope: DataGroupSpecThreedScope

    def __init__(self, actions: List[ThreedAction], scope: DataGroupSpecThreedScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSpecScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class DataGroupSpecScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class DataGroupSpecTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[DataGroupSpecScopeAssetIDScope]
    idscope: Optional[DataGroupSpecScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[DataGroupSpecScopeAssetIDScope], idscope: Optional[DataGroupSpecScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class DataGroupSpecACLTimeseries:
    actions: List[AssetsACLAction]
    scope: DataGroupSpecTimeseriesScope

    def __init__(self, actions: List[AssetsACLAction], scope: DataGroupSpecTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSpecUserScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class DataGroupSpecACLUser:
    actions: List[ApikeysACLAction]
    scope: DataGroupSpecUserScope

    def __init__(self, actions: List[ApikeysACLAction], scope: DataGroupSpecUserScope) -> None:
        self.actions = actions
        self.scope = scope


class DataGroupSpecCapability:
    groups_acl: Optional[DataGroupSpecACLGroup]
    assets_acl: Optional[DataGroupSpecACLAsset]
    events_acl: Optional[DataGroupSpecACLEvent]
    files_acl: Optional[DataGroupSpecACLFile]
    users_acl: Optional[DataGroupSpecACLUser]
    projects_acl: Optional[DataGroupSpecACLProject]
    security_categories_acl: Optional[DataGroupSpecACLSecurityCategory]
    raw_acl: Optional[DataGroupSpecACLRaw]
    time_series_acl: Optional[DataGroupSpecACLTimeseries]
    apikeys_acl: Optional[DataGroupSpecACLApikey]
    threed_acl: Optional[DataGroupSpecACLThreed]
    sequences_acl: Optional[DataGroupSpecACLSequences]
    analytics_acl: Optional[DataGroupSpecACLAnalytics]

    def __init__(self, groups_acl: Optional[DataGroupSpecACLGroup], assets_acl: Optional[DataGroupSpecACLAsset], events_acl: Optional[DataGroupSpecACLEvent], files_acl: Optional[DataGroupSpecACLFile], users_acl: Optional[DataGroupSpecACLUser], projects_acl: Optional[DataGroupSpecACLProject], security_categories_acl: Optional[DataGroupSpecACLSecurityCategory], raw_acl: Optional[DataGroupSpecACLRaw], time_series_acl: Optional[DataGroupSpecACLTimeseries], apikeys_acl: Optional[DataGroupSpecACLApikey], threed_acl: Optional[DataGroupSpecACLThreed], sequences_acl: Optional[DataGroupSpecACLSequences], analytics_acl: Optional[DataGroupSpecACLAnalytics]) -> None:
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


class DataGroupSpecItem:
    """A specification for creating a new group"""
    capabilities: Optional[List[DataGroupSpecCapability]]
    """Name of the group"""
    name: str
    """ID of the group in the source. If this is the same ID as a group in the IDP, a user in
    that group will implicitly be a part of this group as well.
    """
    source_id: Optional[str]

    def __init__(self, capabilities: Optional[List[DataGroupSpecCapability]], name: str, source_id: Optional[str]) -> None:
        self.capabilities = capabilities
        self.name = name
        self.source_id = source_id


class DataGroupSpec:
    items: List[DataGroupSpecItem]

    def __init__(self, items: List[DataGroupSpecItem]) -> None:
        self.items = items
