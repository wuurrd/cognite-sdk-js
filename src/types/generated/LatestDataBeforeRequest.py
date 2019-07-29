from typing import Optional


class LatestDataBeforeRequest:
    """Describes the latest query."""
    """A JavaScript-friendly internal ID for the object."""
    id: Optional[int]
    """Get datapoints before this time. The format is N[timeunit]-ago where timeunit is
    w,d,h,m,s.
    Example: '2d-ago' gets data that is up to 2 days old. You can also specify time in
    milliseconds since epoch.
    """
    before: Optional[str]
    """The external ID provided by the client. Must be unique within the project."""
    external_id: Optional[str]

    def __init__(self, id: Optional[int], before: Optional[str], external_id: Optional[str]) -> None:
        self.id = id
        self.before = before
        self.external_id = external_id
