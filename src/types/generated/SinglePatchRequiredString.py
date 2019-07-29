class SinglePatchRequiredString:
    """Non-removable string change."""
    set: str

    def __init__(self, set: str) -> None:
        self.set = set
