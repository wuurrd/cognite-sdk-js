from typing import Optional, Dict, List


class GetTimeSeriesMetadataDTO:
    """The asset that this time series belongs to."""
    asset_id: Optional[int]
    """Time when this time series was created in CDF in milliseconds since Jan 1, 1970."""
    created_time: int
    """Description of the time series."""
    description: Optional[str]
    """The externally supplied ID for the time series."""
    external_id: Optional[str]
    """The generated ID for the time series."""
    id: int
    """Whether the time series is a step series or not."""
    is_step: bool
    """Whether the time series is string valued or not."""
    is_string: bool
    """The latest time when this time series was updated in CDF in milliseconds since Jan 1,
    1970.
    """
    last_updated_time: int
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[Dict[str, str]]
    """The name of the time series."""
    name: Optional[str]
    """The required security categories to access this time series."""
    security_categories: Optional[List[int]]
    """The physical unit of the time series."""
    unit: Optional[str]

    def __init__(self, asset_id: Optional[int], created_time: int, description: Optional[str], external_id: Optional[str], id: int, is_step: bool, is_string: bool, last_updated_time: int, metadata: Optional[Dict[str, str]], name: Optional[str], security_categories: Optional[List[int]], unit: Optional[str]) -> None:
        self.asset_id = asset_id
        self.created_time = created_time
        self.description = description
        self.external_id = external_id
        self.id = id
        self.is_step = is_step
        self.is_string = is_string
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.name = name
        self.security_categories = security_categories
        self.unit = unit
