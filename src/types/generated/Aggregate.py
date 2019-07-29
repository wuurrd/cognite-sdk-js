from enum import Enum


class Aggregate(Enum):
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
