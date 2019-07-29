from typing import Optional, Dict, List


class TimeSeriesUpdateByIdAssetID:
    """The change that will be applied to the key."""
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByIdDescription:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByIdExternalID:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByIdMetadata:
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


class TimeSeriesUpdateByIdName:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByIdSecurityCategories:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class TimeSeriesUpdateByIdUnit:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateByIdUpdate:
    """The change that will be applied to the key."""
    asset_id: Optional[TimeSeriesUpdateByIdAssetID]
    """The change that will be applied to the key."""
    description: Optional[TimeSeriesUpdateByIdDescription]
    """The change that will be applied to the key."""
    external_id: Optional[TimeSeriesUpdateByIdExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[TimeSeriesUpdateByIdMetadata]
    """The change that will be applied to the key."""
    name: Optional[TimeSeriesUpdateByIdName]
    """Change that will be applied to the array object."""
    security_categories: Optional[TimeSeriesUpdateByIdSecurityCategories]
    """The change that will be applied to the key."""
    unit: Optional[TimeSeriesUpdateByIdUnit]

    def __init__(self, asset_id: Optional[TimeSeriesUpdateByIdAssetID], description: Optional[TimeSeriesUpdateByIdDescription], external_id: Optional[TimeSeriesUpdateByIdExternalID], metadata: Optional[TimeSeriesUpdateByIdMetadata], name: Optional[TimeSeriesUpdateByIdName], security_categories: Optional[TimeSeriesUpdateByIdSecurityCategories], unit: Optional[TimeSeriesUpdateByIdUnit]) -> None:
        self.asset_id = asset_id
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit


class TimeSeriesUpdateByID:
    """Changes will be applied to time series."""
    update: TimeSeriesUpdateByIdUpdate
    """A JavaScript-friendly internal ID for the object."""
    id: int

    def __init__(self, update: TimeSeriesUpdateByIdUpdate, id: int) -> None:
        self.update = update
        self.id = id
