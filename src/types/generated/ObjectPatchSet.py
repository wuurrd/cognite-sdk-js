from typing import Dict


class ObjectPatchSet:
    """Set the key-value pairs. All existing key-value pairs will be removed."""
    set: Dict[str, str]

    def __init__(self, set: Dict[str, str]) -> None:
        self.set = set
