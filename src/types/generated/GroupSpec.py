from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class GroupSpecAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLAnalytics:
    actions: List[AnalyticsAction]
    scope: GroupSpecAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: GroupSpecAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope


class ApikeysACLAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class GroupSpecApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupSpecACLApikey:
    actions: List[ApikeysACLAction]
    scope: GroupSpecApikeyScope

    def __init__(self, actions: List[ApikeysACLAction], scope: GroupSpecApikeyScope) -> None:
        self.actions = actions
        self.scope = scope


class AssetsACLAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class GroupSpecAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLAsset:
    actions: List[AssetsACLAction]
    scope: GroupSpecAssetScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupSpecAssetScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSpecEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLEvent:
    actions: List[AssetsACLAction]
    scope: GroupSpecEventScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupSpecEventScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSpecFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLFile:
    actions: List[AssetsACLAction]
    scope: GroupSpecFileScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupSpecFileScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupSpecGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupSpecACLGroup:
    actions: List[GroupAction]
    scope: GroupSpecGroupScope

    def __init__(self, actions: List[GroupAction], scope: GroupSpecGroupScope) -> None:
        self.actions = actions
        self.scope = scope


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupSpecProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLProject:
    actions: List[ProjectAction]
    scope: GroupSpecProjectScope

    def __init__(self, actions: List[ProjectAction], scope: GroupSpecProjectScope) -> None:
        self.actions = actions
        self.scope = scope


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class GroupSpecRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLRaw:
    actions: List[RawAction]
    scope: GroupSpecRawScope

    def __init__(self, actions: List[RawAction], scope: GroupSpecRawScope) -> None:
        self.actions = actions
        self.scope = scope


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class GroupSpecSecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLSecurityCategory:
    actions: List[SecurityCategoryAction]
    scope: GroupSpecSecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: GroupSpecSecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSpecSequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLSequences:
    actions: List[AssetsACLAction]
    scope: GroupSpecSequencesScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupSpecSequencesScope) -> None:
        self.actions = actions
        self.scope = scope


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class GroupSpecThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class GroupSpecACLThreed:
    actions: List[ThreedAction]
    scope: GroupSpecThreedScope

    def __init__(self, actions: List[ThreedAction], scope: GroupSpecThreedScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSpecScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class GroupSpecScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class GroupSpecTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[GroupSpecScopeAssetIDScope]
    idscope: Optional[GroupSpecScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[GroupSpecScopeAssetIDScope], idscope: Optional[GroupSpecScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class GroupSpecACLTimeseries:
    actions: List[AssetsACLAction]
    scope: GroupSpecTimeseriesScope

    def __init__(self, actions: List[AssetsACLAction], scope: GroupSpecTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSpecUserScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class GroupSpecACLUser:
    actions: List[ApikeysACLAction]
    scope: GroupSpecUserScope

    def __init__(self, actions: List[ApikeysACLAction], scope: GroupSpecUserScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupSpecCapability:
    groups_acl: Optional[GroupSpecACLGroup]
    assets_acl: Optional[GroupSpecACLAsset]
    events_acl: Optional[GroupSpecACLEvent]
    files_acl: Optional[GroupSpecACLFile]
    users_acl: Optional[GroupSpecACLUser]
    projects_acl: Optional[GroupSpecACLProject]
    security_categories_acl: Optional[GroupSpecACLSecurityCategory]
    raw_acl: Optional[GroupSpecACLRaw]
    time_series_acl: Optional[GroupSpecACLTimeseries]
    apikeys_acl: Optional[GroupSpecACLApikey]
    threed_acl: Optional[GroupSpecACLThreed]
    sequences_acl: Optional[GroupSpecACLSequences]
    analytics_acl: Optional[GroupSpecACLAnalytics]

    def __init__(self, groups_acl: Optional[GroupSpecACLGroup], assets_acl: Optional[GroupSpecACLAsset], events_acl: Optional[GroupSpecACLEvent], files_acl: Optional[GroupSpecACLFile], users_acl: Optional[GroupSpecACLUser], projects_acl: Optional[GroupSpecACLProject], security_categories_acl: Optional[GroupSpecACLSecurityCategory], raw_acl: Optional[GroupSpecACLRaw], time_series_acl: Optional[GroupSpecACLTimeseries], apikeys_acl: Optional[GroupSpecACLApikey], threed_acl: Optional[GroupSpecACLThreed], sequences_acl: Optional[GroupSpecACLSequences], analytics_acl: Optional[GroupSpecACLAnalytics]) -> None:
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


class GroupSpec:
    """A specification for creating a new group"""
    capabilities: Optional[List[GroupSpecCapability]]
    """Name of the group"""
    name: str
    """ID of the group in the source. If this is the same ID as a group in the IDP, a user in
    that group will implicitly be a part of this group as well.
    """
    source_id: Optional[str]

    def __init__(self, capabilities: Optional[List[GroupSpecCapability]], name: str, source_id: Optional[str]) -> None:
        self.capabilities = capabilities
        self.name = name
        self.source_id = source_id
