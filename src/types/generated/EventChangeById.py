from typing import Optional, List, Dict


class EventChangeByIdAssetIDS:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class EventChangeByIdDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdEndTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdMetadata:
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    """Set the key-value pairs. All existing key-value pairs will be removed."""
    set: Optional[Dict[str, str]]
    """Add the key-value pairs. Values for existing keys will be overwritten."""
    add: Optional[Dict[str, str]]
    """Remove the key-value pairs with the specified keys."""
    remove: Optional[List[str]]

    def __init__(self, set: Optional[Dict[str, str]], add: Optional[Dict[str, str]], remove: Optional[List[str]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class EventChangeByIdSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdStartTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdSubtype:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdTypeClass:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByIdUpdate:
    """Change that will be applied to the array object."""
    asset_ids: Optional[EventChangeByIdAssetIDS]
    """Removable string change."""
    description: Optional[EventChangeByIdDescription]
    end_time: Optional[EventChangeByIdEndTime]
    """Removable string change."""
    external_id: Optional[EventChangeByIdExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[EventChangeByIdMetadata]
    """Removable string change."""
    source: Optional[EventChangeByIdSource]
    start_time: Optional[EventChangeByIdStartTime]
    """Removable string change."""
    subtype: Optional[EventChangeByIdSubtype]
    """Removable string change."""
    type: Optional[EventChangeByIdTypeClass]

    def __init__(self, asset_ids: Optional[EventChangeByIdAssetIDS], description: Optional[EventChangeByIdDescription], end_time: Optional[EventChangeByIdEndTime], external_id: Optional[EventChangeByIdExternalID], metadata: Optional[EventChangeByIdMetadata], source: Optional[EventChangeByIdSource], start_time: Optional[EventChangeByIdStartTime], subtype: Optional[EventChangeByIdSubtype], type: Optional[EventChangeByIdTypeClass]) -> None:
        self.asset_ids = asset_ids
        self.description = description
        self.end_time = end_time
        self.external_id = external_id
        self.metadata = metadata
        self.source = source
        self.start_time = start_time
        self.subtype = subtype
        self.type = type


class EventChangeByID:
    """Changes will be applied to event."""
    update: EventChangeByIdUpdate
    """Javascript friendly internal ID given to the object."""
    id: int

    def __init__(self, update: EventChangeByIdUpdate, id: int) -> None:
        self.update = update
        self.id = id
