from typing import Optional, Dict, List


class TimeSeriesPatchAssetID:
    """The change that will be applied to the key."""
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesPatchDescription:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesPatchExternalID:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesPatchMetadata:
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


class TimeSeriesPatchName:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesPatchSecurityCategories:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class TimeSeriesPatchUnit:
    """The change that will be applied to the key."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class TimeSeriesPatchUpdate:
    """The change that will be applied to the key."""
    asset_id: Optional[TimeSeriesPatchAssetID]
    """The change that will be applied to the key."""
    description: Optional[TimeSeriesPatchDescription]
    """The change that will be applied to the key."""
    external_id: Optional[TimeSeriesPatchExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[TimeSeriesPatchMetadata]
    """The change that will be applied to the key."""
    name: Optional[TimeSeriesPatchName]
    """Change that will be applied to the array object."""
    security_categories: Optional[TimeSeriesPatchSecurityCategories]
    """The change that will be applied to the key."""
    unit: Optional[TimeSeriesPatchUnit]

    def __init__(self, asset_id: Optional[TimeSeriesPatchAssetID], description: Optional[TimeSeriesPatchDescription], external_id: Optional[TimeSeriesPatchExternalID], metadata: Optional[TimeSeriesPatchMetadata], name: Optional[TimeSeriesPatchName], security_categories: Optional[TimeSeriesPatchSecurityCategories], unit: Optional[TimeSeriesPatchUnit]) -> None:
        self.asset_id = asset_id
        self.description = description
        self.external_id = external_id
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit


class TimeSeriesPatch:
    """Changes will be applied to time series."""
    update: TimeSeriesPatchUpdate

    def __init__(self, update: TimeSeriesPatchUpdate) -> None:
        self.update = update
