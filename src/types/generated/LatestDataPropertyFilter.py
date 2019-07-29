from typing import Optional


class LatestDataPropertyFilterClass:
    """Get datapoints before this time. The format is N[timeunit]-ago where timeunit is
    w,d,h,m,s.
    Example: '2d-ago' gets data that is up to 2 days old. You can also specify time in
    milliseconds since epoch.
    """
    before: Optional[str]

    def __init__(self, before: Optional[str]) -> None:
        self.before = before
