from typing import Optional


class DatapointsMetadataClass:
    """The external ID of the time series the datapoints belong to."""
    external_id: Optional[str]
    """The ID of the time series the datapoints belong to."""
    id: int

    def __init__(self, external_id: Optional[str], id: int) -> None:
        self.external_id = external_id
        self.id = id
