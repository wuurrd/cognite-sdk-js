from typing import Optional


class SetModelNameField:
    set: Optional[str]

    def __init__(self, set: Optional[str]) -> None:
        self.set = set
