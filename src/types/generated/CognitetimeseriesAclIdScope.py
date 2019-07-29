from typing import Optional, List


class CognitetimeseriesACLIDScope:
    ids: Optional[List[str]]

    def __init__(self, ids: Optional[List[str]]) -> None:
        self.ids = ids
