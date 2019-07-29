from typing import Optional, List


class SetRevisionRotation:
    set: Optional[List[float]]

    def __init__(self, set: Optional[List[float]]) -> None:
        self.set = set
