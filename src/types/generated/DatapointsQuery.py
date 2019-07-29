from enum import Enum
from typing import Optional, List, Union


class Aggregate(Enum):
    """Specify the aggregates to return. Use default if null. If the default is a set of
    aggregates, specify an empty string to get raw data.
    """
    AVERAGE = "average"
    CONTINUOUS_VARIANCE = "continuousVariance"
    COUNT = "count"
    DISCRETE_VARIANCE = "discreteVariance"
    INTERPOLATION = "interpolation"
    MAX = "max"
    MIN = "min"
    STEP_INTERPOLATION = "stepInterpolation"
    SUM = "sum"
    TOTAL_VARIATION = "totalVariation"


class DatapointsQuery:
    """Parameters describing a query for datapoints."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """Specify the aggregates to return. Use default if null. If the default is a set of
    aggregates, specify an empty string to get raw data.
    """
    aggregates: Optional[List[Aggregate]]
    """Get datapoints up to, but excluding, this point in time. Same format as for start. Note
    that when using aggregates, the end will be rounded up such that the last aggregate
    represents a full aggregation interval containing the original end, where the interval is
    the granularity unit times the granularity multiplier. For granularity 2d, the
    aggregation interval is 2 days, if end was originally 3 days after the start, it will be
    rounded to 4 days after the start.
    """
    end: Union[int, None, str]
    """The granularity size and granularity of the aggregates."""
    granularity: Optional[str]
    """Whether to include the last datapoint before the requested time period,and the first one
    after. This option can be useful for interpolating data. It is not available for
    aggregates.
    """
    include_outside_points: Optional[bool]
    """Return up to this number of datapoints."""
    limit: Optional[int]
    """Get datapoints after this time. The format is N[timeunit]-ago where
    timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
    old. You can also specify time in milliseconds since epoch. Note that for aggregates, the
    start time is rounded down to a whole granularity unit (in UTC timezone). Daily
    granularities (d)
    are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
    """
    start: Union[int, None, str]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], aggregates: Optional[List[Aggregate]], end: Union[int, None, str], granularity: Optional[str], include_outside_points: Optional[bool], limit: Optional[int], start: Union[int, None, str], external_id: Optional[str]) -> None:
        self.id = id
        self.aggregates = aggregates
        self.end = end
        self.granularity = granularity
        self.include_outside_points = include_outside_points
        self.limit = limit
        self.start = start
        self.external_id = external_id
