from enum import Enum
from typing import Optional, Dict, Any, List


class AnalyticsAction(Enum):
    EXECUTE = "EXECUTE"
    LIST = "LIST"
    READ = "READ"


class CogniteCapabilityAnalyticsScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLAnalytics:
    actions: List[AnalyticsAction]
    scope: CogniteCapabilityAnalyticsScope

    def __init__(self, actions: List[AnalyticsAction], scope: CogniteCapabilityAnalyticsScope) -> None:
        self.actions = actions
        self.scope = scope


class ApikeysACLAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"


class CogniteCapabilityApikeyScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class CogniteCapabilityACLApikey:
    actions: List[ApikeysACLAction]
    scope: CogniteCapabilityApikeyScope

    def __init__(self, actions: List[ApikeysACLAction], scope: CogniteCapabilityApikeyScope) -> None:
        self.actions = actions
        self.scope = scope


class AssetsACLAction(Enum):
    READ = "READ"
    WRITE = "WRITE"


class CogniteCapabilityAssetScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLAsset:
    actions: List[AssetsACLAction]
    scope: CogniteCapabilityAssetScope

    def __init__(self, actions: List[AssetsACLAction], scope: CogniteCapabilityAssetScope) -> None:
        self.actions = actions
        self.scope = scope


class CogniteCapabilityEventScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLEvent:
    actions: List[AssetsACLAction]
    scope: CogniteCapabilityEventScope

    def __init__(self, actions: List[AssetsACLAction], scope: CogniteCapabilityEventScope) -> None:
        self.actions = actions
        self.scope = scope


class CogniteCapabilityFileScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLFile:
    actions: List[AssetsACLAction]
    scope: CogniteCapabilityFileScope

    def __init__(self, actions: List[AssetsACLAction], scope: CogniteCapabilityFileScope) -> None:
        self.actions = actions
        self.scope = scope


class GroupAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class CogniteCapabilityGroupScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class CogniteCapabilityACLGroup:
    actions: List[GroupAction]
    scope: CogniteCapabilityGroupScope

    def __init__(self, actions: List[GroupAction], scope: CogniteCapabilityGroupScope) -> None:
        self.actions = actions
        self.scope = scope


class ProjectAction(Enum):
    CREATE = "CREATE"
    LIST = "LIST"
    READ = "READ"
    UPDATE = "UPDATE"


class CogniteCapabilityProjectScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLProject:
    actions: List[ProjectAction]
    scope: CogniteCapabilityProjectScope

    def __init__(self, actions: List[ProjectAction], scope: CogniteCapabilityProjectScope) -> None:
        self.actions = actions
        self.scope = scope


class RawAction(Enum):
    LIST = "LIST"
    READ = "READ"
    WRITE = "WRITE"


class CogniteCapabilityRawScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLRaw:
    actions: List[RawAction]
    scope: CogniteCapabilityRawScope

    def __init__(self, actions: List[RawAction], scope: CogniteCapabilityRawScope) -> None:
        self.actions = actions
        self.scope = scope


class SecurityCategoryAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    LIST = "LIST"
    MEMBEROF = "MEMBEROF"


class CogniteCapabilitySecurityCategoryScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLSecurityCategory:
    actions: List[SecurityCategoryAction]
    scope: CogniteCapabilitySecurityCategoryScope

    def __init__(self, actions: List[SecurityCategoryAction], scope: CogniteCapabilitySecurityCategoryScope) -> None:
        self.actions = actions
        self.scope = scope


class CogniteCapabilitySequencesScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLSequences:
    actions: List[AssetsACLAction]
    scope: CogniteCapabilitySequencesScope

    def __init__(self, actions: List[AssetsACLAction], scope: CogniteCapabilitySequencesScope) -> None:
        self.actions = actions
        self.scope = scope


class ThreedAction(Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    READ = "READ"
    UPDATE = "UPDATE"


class CogniteCapabilityThreedScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all


class CogniteCapabilityACLThreed:
    actions: List[ThreedAction]
    scope: CogniteCapabilityThreedScope

    def __init__(self, actions: List[ThreedAction], scope: CogniteCapabilityThreedScope) -> None:
        self.actions = actions
        self.scope = scope


class CogniteCapabilityScopeAssetIDScope:
    subtree_ids: Optional[List[str]]

    def __init__(self, subtree_ids: Optional[List[str]]) -> None:
        self.subtree_ids = subtree_ids


class CogniteCapabilityScopeTimeSeriesIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids


class CogniteCapabilityTimeseriesScope:
    all: Optional[Dict[str, Any]]
    asset_id_scope: Optional[CogniteCapabilityScopeAssetIDScope]
    idscope: Optional[CogniteCapabilityScopeTimeSeriesIDScope]

    def __init__(self, all: Optional[Dict[str, Any]], asset_id_scope: Optional[CogniteCapabilityScopeAssetIDScope], idscope: Optional[CogniteCapabilityScopeTimeSeriesIDScope]) -> None:
        self.all = all
        self.asset_id_scope = asset_id_scope
        self.idscope = idscope


class CogniteCapabilityACLTimeseries:
    actions: List[AssetsACLAction]
    scope: CogniteCapabilityTimeseriesScope

    def __init__(self, actions: List[AssetsACLAction], scope: CogniteCapabilityTimeseriesScope) -> None:
        self.actions = actions
        self.scope = scope


class CogniteCapabilityUserScope:
    all: Optional[Dict[str, Any]]
    currentuserscope: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]], currentuserscope: Optional[Dict[str, Any]]) -> None:
        self.all = all
        self.currentuserscope = currentuserscope


class CogniteCapabilityACLUser:
    actions: List[ApikeysACLAction]
    scope: CogniteCapabilityUserScope

    def __init__(self, actions: List[ApikeysACLAction], scope: CogniteCapabilityUserScope) -> None:
        self.actions = actions
        self.scope = scope


class CogniteCapabilityElement:
    groups_acl: Optional[CogniteCapabilityACLGroup]
    assets_acl: Optional[CogniteCapabilityACLAsset]
    events_acl: Optional[CogniteCapabilityACLEvent]
    files_acl: Optional[CogniteCapabilityACLFile]
    users_acl: Optional[CogniteCapabilityACLUser]
    projects_acl: Optional[CogniteCapabilityACLProject]
    security_categories_acl: Optional[CogniteCapabilityACLSecurityCategory]
    raw_acl: Optional[CogniteCapabilityACLRaw]
    time_series_acl: Optional[CogniteCapabilityACLTimeseries]
    apikeys_acl: Optional[CogniteCapabilityACLApikey]
    threed_acl: Optional[CogniteCapabilityACLThreed]
    sequences_acl: Optional[CogniteCapabilityACLSequences]
    analytics_acl: Optional[CogniteCapabilityACLAnalytics]

    def __init__(self, groups_acl: Optional[CogniteCapabilityACLGroup], assets_acl: Optional[CogniteCapabilityACLAsset], events_acl: Optional[CogniteCapabilityACLEvent], files_acl: Optional[CogniteCapabilityACLFile], users_acl: Optional[CogniteCapabilityACLUser], projects_acl: Optional[CogniteCapabilityACLProject], security_categories_acl: Optional[CogniteCapabilityACLSecurityCategory], raw_acl: Optional[CogniteCapabilityACLRaw], time_series_acl: Optional[CogniteCapabilityACLTimeseries], apikeys_acl: Optional[CogniteCapabilityACLApikey], threed_acl: Optional[CogniteCapabilityACLThreed], sequences_acl: Optional[CogniteCapabilityACLSequences], analytics_acl: Optional[CogniteCapabilityACLAnalytics]) -> None:
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
