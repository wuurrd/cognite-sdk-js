from typing import Optional


class NullableSinglePatchLong:
    """The change that will be applied to the key."""
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null
