from typing import Optional, List


class ArrayPatchLongAddOrRemove:
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.add = add
        self.remove = remove
