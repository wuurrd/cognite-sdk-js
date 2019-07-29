from typing import Optional


class DatapointsDeleteRangeClass:
    """The timestamp of the first datapoint after inclusiveBegin to not delete. If not set, only
    deletes the datapoint at inclusiveBegin.
    """
    exclusive_end: Optional[int]
    """The timestamp of first datapoint to delete."""
    inclusive_begin: int

    def __init__(self, exclusive_end: Optional[int], inclusive_begin: int) -> None:
        self.exclusive_end = exclusive_end
        self.inclusive_begin = inclusive_begin
