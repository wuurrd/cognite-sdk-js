from typing import Optional, Dict, Any


class CogniterawACLScope:
    all: Optional[Dict[str, Any]]

    def __init__(self, all: Optional[Dict[str, Any]]) -> None:
        self.all = all
