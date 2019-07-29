from typing import Optional, List


class SetRevisionCameraPropertiesSet:
    """Initial camera position and target."""
    """Initial camera position."""
    position: Optional[List[float]]
    """Initial camera target."""
    target: Optional[List[float]]

    def __init__(self, position: Optional[List[float]], target: Optional[List[float]]) -> None:
        self.position = position
        self.target = target


class SetRevisionCameraProperties:
    """Initial camera position and target."""
    set: Optional[SetRevisionCameraPropertiesSet]

    def __init__(self, set: Optional[SetRevisionCameraPropertiesSet]) -> None:
        self.set = set
