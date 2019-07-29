from typing import Optional, Dict, List


class TimeSeriesUpdateByExternalIdAssetID:
    """The change that will be applied to the key."""
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByExternalIdDescription:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByExternalIdExternalID:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByExternalIdMetadata:
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    """Set the key-value pairs. All existing key-value pairs will be removed."""
    set: Optional[Dict[str, str]]
    """Add the key-value pairs. Values for existing keys will be overwritten."""
    add: Optional[Dict[str, str]]
    """Remove the key-value pairs with the specified keys."""
    remove: Optional[List[str]]

    def __init__(self, set: Optional[Dict[str, str]], add: Optional[Dict[str, str]], remove: Optional[List[str]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class TimeSeriesUpdateByExternalIdName:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByExternalIdSecurityCategories:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class TimeSeriesUpdateByExternalIdUnit:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByExternalIdUpdate:
    """The change that will be applied to the key."""
    asset_id: Optional[TimeSeriesUpdateByExternalIdAssetID]
    """The change that will be applied to the key."""
    description: Optional[TimeSeriesUpdateByExternalIdDescription]
    """The change that will be applied to the key."""
    external_id: Optional[TimeSeriesUpdateByExternalIdExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[TimeSeriesUpdateByExternalIdMetadata]
    """The change that will be applied to the key."""
    name: Optional[TimeSeriesUpdateByExternalIdName]
    """Change that will be applied to the array object."""
    security_categories: Optional[TimeSeriesUpdateByExternalIdSecurityCategories]
    """The change that will be applied to the key."""
    unit: Optional[TimeSeriesUpdateByExternalIdUnit]

    def __init__(self, asset_id: Optional[TimeSeriesUpdateByExternalIdAssetID], description: Optional[TimeSeriesUpdateByExternalIdDescription], external_id: Optional[TimeSeriesUpdateByExternalIdExternalID], metadata: Optional[TimeSeriesUpdateByExternalIdMetadata], name: Optional[TimeSeriesUpdateByExternalIdName], security_categories: Optional[TimeSeriesUpdateByExternalIdSecurityCategories], unit: Optional[TimeSeriesUpdateByExternalIdUnit]) -> None:
        self.asset_id = asset_id
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit


class TimeSeriesUpdateByExternalID:
    """Changes will be applied to time series."""
    update: TimeSeriesUpdateByExternalIdUpdate
    """The external ID provided by the client. Must be unique within the project."""
    external_id: str

    def __init__(self, update: TimeSeriesUpdateByExternalIdUpdate, external_id: str) -> None:
        self.update = update
        self.external_id = external_id
