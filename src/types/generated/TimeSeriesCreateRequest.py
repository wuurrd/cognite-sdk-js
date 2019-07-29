from typing import Optional, Dict, List


class TimeSeriesCreateRequestItem:
    """The asset that this time series belongs to."""
    asset_id: Optional[int]
    """A description of the time series."""
    description: Optional[str]
    """Externally provided ID for the time series (optional, but recommended.)"""
    external_id: Optional[str]
    """Whether the time series is a step series or not."""
    is_step: Optional[bool]
    """Whether the time series is string valued or not."""
    is_string: Optional[bool]
    """Set a value for legacyName to allow applications using API v0.3, v04, v05, and v0.6 to
    access this time series. The legacy name is the human-readable name for the time series
    and is mapped to the name field used in API versions 0.3-0.6. The legacyName field value
    must be unique, and setting this value to an already existing value will return an error.
    We recommend that you set this field to the same value as externalId.
    """
    legacy_name: Optional[str]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """Human readable name of the time series"""
    name: Optional[str]
    """The required security categories to access this time series."""
    security_categories: Optional[List[int]]
    """The physical unit of the time series."""
    unit: Optional[str]

    def __init__(self, asset_id: Optional[int], description: Optional[str], external_id: Optional[str], is_step: Optional[bool], is_string: Optional[bool], legacy_name: Optional[str], metadata: Optional[Dict[str, str]], name: Optional[str], security_categories: Optional[List[int]], unit: Optional[str]) -> None:
        self.asset_id = asset_id
        self.description = description
        self.external_id = external_id
        self.is_step = is_step
        self.is_string = is_string
        self.legacy_name = legacy_name
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit


class TimeSeriesCreateRequest:
    items: List[TimeSeriesCreateRequestItem]

    def __init__(self, items: List[TimeSeriesCreateRequestItem]) -> None:
        self.items = items
