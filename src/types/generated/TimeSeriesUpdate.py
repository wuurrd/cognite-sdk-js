from typing import Optional, Dict, List


class TimeSeriesUpdateAssetID:
    """The change that will be applied to the key."""
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateDescription:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateExternalID:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateMetadata:
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


class TimeSeriesUpdateName:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateSecurityCategories:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class TimeSeriesUpdateUnit:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateUpdate:
    """The change that will be applied to the key."""
    asset_id: Optional[TimeSeriesUpdateAssetID]
    """The change that will be applied to the key."""
    description: Optional[TimeSeriesUpdateDescription]
    """The change that will be applied to the key."""
    external_id: Optional[TimeSeriesUpdateExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[TimeSeriesUpdateMetadata]
    """The change that will be applied to the key."""
    name: Optional[TimeSeriesUpdateName]
    """Change that will be applied to the array object."""
    security_categories: Optional[TimeSeriesUpdateSecurityCategories]
    """The change that will be applied to the key."""
    unit: Optional[TimeSeriesUpdateUnit]

    def __init__(self, asset_id: Optional[TimeSeriesUpdateAssetID], description: Optional[TimeSeriesUpdateDescription], external_id: Optional[TimeSeriesUpdateExternalID], metadata: Optional[TimeSeriesUpdateMetadata], name: Optional[TimeSeriesUpdateName], security_categories: Optional[TimeSeriesUpdateSecurityCategories], unit: Optional[TimeSeriesUpdateUnit]) -> None:
        self.asset_id = asset_id
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit


class TimeSeriesUpdate:
    """Changes will be applied to time series."""
    update: TimeSeriesUpdateUpdate
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, update: TimeSeriesUpdateUpdate, id: Optional[int], external_id: Optional[str]) -> None:
        self.update = update
        self.id = id
        self.external_id = external_id
