from typing import Optional, List, Dict


class TimeSeriesSearchDTOCreatedTime:
    """Filter out time series with createdTime outside this range."""
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    max: Optional[int]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    min: Optional[int]

    def __init__(self, max: Optional[int], min: Optional[int]) -> None:
        self.max = max
        self.min = min


class TimeSeriesSearchDTOLastUpdatedTime:
    """Filter out time series with lastUpdatedTime outside this range."""
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    max: Optional[int]
    """The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal
    Time (UTC), minus leap seconds.
    """
    min: Optional[int]

    def __init__(self, max: Optional[int], min: Optional[int]) -> None:
        self.max = max
        self.min = min


class TimeSeriesSearchDTOFilter:
    """Filtering parameters"""
    """Filter out time series that are not linked to any of these assets."""
    asset_ids: Optional[List[int]]
    """Filter out time series with createdTime outside this range."""
    created_time: Optional[TimeSeriesSearchDTOCreatedTime]
    """Prefix filter on externalId. (case-sensitive)"""
    external_id_prefix: Optional[str]
    """Filter on isStep."""
    is_step: Optional[bool]
    """Filter on isString."""
    is_string: Optional[bool]
    """Filter out time series with lastUpdatedTime outside this range."""
    last_updated_time: Optional[TimeSeriesSearchDTOLastUpdatedTime]
    """Filter out timeseries that do not match these metadata fields and values
    (case-sensitive). The format is {"key1":"value1","key2":"value2"}.
    """
    metadata: Optional[Dict[str, str]]
    """Filter on name."""
    name: Optional[str]
    """The IDs of the root assets that the related assets should be children of."""
    root_asset_ids: Optional[List[int]]
    """Filter on unit."""
    unit: Optional[str]

    def __init__(self, asset_ids: Optional[List[int]], created_time: Optional[TimeSeriesSearchDTOCreatedTime], external_id_prefix: Optional[str], is_step: Optional[bool], is_string: Optional[bool], last_updated_time: Optional[TimeSeriesSearchDTOLastUpdatedTime], metadata: Optional[Dict[str, str]], name: Optional[str], root_asset_ids: Optional[List[int]], unit: Optional[str]) -> None:
        self.asset_ids = asset_ids
        self.created_time = created_time
        self.external_id_prefix = external_id_prefix
        self.is_step = is_step
        self.is_string = is_string
        self.last_updated_time = last_updated_time
        self.metadata = metadata
        self.name = name
        self.root_asset_ids = root_asset_ids
        self.unit = unit


class TimeSeriesSearchDTOSearch:
    """Search parameters"""
    """Prefix and fuzzy search on description."""
    description: Optional[str]
    """Prefix and fuzzy search on name."""
    name: Optional[str]
    """Search on name and description using wildcard search on each
    of the words (separated by spaces). Retrieves results where at least one word match.
    """
    query: Optional[str]

    def __init__(self, description: Optional[str], name: Optional[str], query: Optional[str]) -> None:
        self.description = description
        self.name = name
        self.query = query


class TimeSeriesSearchDTO:
    """Filtering parameters"""
    filter: Optional[TimeSeriesSearchDTOFilter]
    """Return up to this many results."""
    limit: Optional[int]
    """Search parameters"""
    search: Optional[TimeSeriesSearchDTOSearch]

    def __init__(self, filter: Optional[TimeSeriesSearchDTOFilter], limit: Optional[int], search: Optional[TimeSeriesSearchDTOSearch]) -> None:
        self.filter = filter
        self.limit = limit
        self.search = search
