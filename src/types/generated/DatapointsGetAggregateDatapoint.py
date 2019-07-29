from typing import Optional, List


class DatapointsGetAggregateDatapointDatapoint:
    """The data timestamp in milliseconds since the epoch (Jan 1, 1970)."""
    timestamp: int
    """The integral average value in the aggregate period."""
    average: Optional[float]
    """The variance of the interpolated underlying function."""
    continuous_variance: Optional[float]
    """The number of datapoints in the aggregate period."""
    count: Optional[int]
    """The variance of the datapoint values."""
    discrete_variance: Optional[float]
    """The interpolated value of the series in the beginning of the aggregate."""
    interpolation: Optional[float]
    """The maximum value in the aggregate period."""
    max: Optional[float]
    """The minimum value in the aggregate period."""
    min: Optional[float]
    """The last value before or at the beginning of the aggregate."""
    step_interpolation: Optional[float]
    """The sum of the datapoints in the aggregate period."""
    sum: Optional[float]
    """The total variation of the interpolated underlying function."""
    total_variation: Optional[float]

    def __init__(self, timestamp: int, average: Optional[float], continuous_variance: Optional[float], count: Optional[int], discrete_variance: Optional[float], interpolation: Optional[float], max: Optional[float], min: Optional[float], step_interpolation: Optional[float], sum: Optional[float], total_variation: Optional[float]) -> None:
        self.timestamp = timestamp
        self.average = average
        self.continuous_variance = continuous_variance
        self.count = count
        self.discrete_variance = discrete_variance
        self.interpolation = interpolation
        self.max = max
        self.min = min
        self.step_interpolation = step_interpolation
        self.sum = sum
        self.total_variation = total_variation


class DatapointsGetAggregateDatapoint:
    """The external ID of the time series the datapoints belong to."""
    external_id: Optional[str]
    """The ID of the time series the datapoints belong to."""
    id: int
    """The list of datapoints"""
    datapoints: List[DatapointsGetAggregateDatapointDatapoint]

    def __init__(self, external_id: Optional[str], id: int, datapoints: List[DatapointsGetAggregateDatapointDatapoint]) -> None:
        self.external_id = external_id
        self.id = id
        self.datapoints = datapoints
