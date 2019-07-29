from typing import Optional, Dict, List


class TimeSeriesUpdateRequestAssetID:
    """The change that will be applied to the key."""
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateRequestDescription:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateRequestExternalID:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateRequestMetadata:
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


class TimeSeriesUpdateRequestName:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateRequestSecurityCategories:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class TimeSeriesUpdateRequestUnit:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesUpdateRequestUpdate:
    """The change that will be applied to the key."""
    asset_id: Optional[TimeSeriesUpdateRequestAssetID]
    """The change that will be applied to the key."""
    description: Optional[TimeSeriesUpdateRequestDescription]
    """The change that will be applied to the key."""
    external_id: Optional[TimeSeriesUpdateRequestExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[TimeSeriesUpdateRequestMetadata]
    """The change that will be applied to the key."""
    name: Optional[TimeSeriesUpdateRequestName]
    """Change that will be applied to the array object."""
    security_categories: Optional[TimeSeriesUpdateRequestSecurityCategories]
    """The change that will be applied to the key."""
    unit: Optional[TimeSeriesUpdateRequestUnit]

    def __init__(self, asset_id: Optional[TimeSeriesUpdateRequestAssetID], description: Optional[TimeSeriesUpdateRequestDescription], external_id: Optional[TimeSeriesUpdateRequestExternalID], metadata: Optional[TimeSeriesUpdateRequestMetadata], name: Optional[TimeSeriesUpdateRequestName], security_categories: Optional[TimeSeriesUpdateRequestSecurityCategories], unit: Optional[TimeSeriesUpdateRequestUnit]) -> None:
        self.asset_id = asset_id
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit


class TimeSeriesUpdateRequestItem:
    """Changes will be applied to time series."""
    update: TimeSeriesUpdateRequestUpdate
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, update: TimeSeriesUpdateRequestUpdate, id: Optional[int], external_id: Optional[str]) -> None:
        self.update = update
        self.id = id
        self.external_id = external_id


class TimeSeriesUpdateRequest:
    items: List[TimeSeriesUpdateRequestItem]

    def __init__(self, items: List[TimeSeriesUpdateRequestItem]) -> None:
        self.items = items
