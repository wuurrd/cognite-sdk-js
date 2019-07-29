from typing import Optional, Dict, List


class ObjectPatchAddRemove:
    """Add the key-value pairs. Values for existing keys will be overwritten."""
    add: Optional[Dict[str, str]]
    """Remove the key-value pairs with the specified keys."""
    remove: Optional[List[str]]

    def __init__(self, add: Optional[Dict[str, str]], remove: Optional[List[str]]) -> None:
        self.add = add
        self.remove = remove
