from typing import Optional, List, Dict


class EventChangeByExternalIdAssetIDS:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class EventChangeByExternalIdDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdEndTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdMetadata:
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


class EventChangeByExternalIdSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdStartTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdSubtype:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdTypeClass:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeByExternalIdUpdate:
    """Change that will be applied to the array object."""
    asset_ids: Optional[EventChangeByExternalIdAssetIDS]
    """Removable string change."""
    description: Optional[EventChangeByExternalIdDescription]
    end_time: Optional[EventChangeByExternalIdEndTime]
    """Removable string change."""
    external_id: Optional[EventChangeByExternalIdExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[EventChangeByExternalIdMetadata]
    """Removable string change."""
    source: Optional[EventChangeByExternalIdSource]
    start_time: Optional[EventChangeByExternalIdStartTime]
    """Removable string change."""
    subtype: Optional[EventChangeByExternalIdSubtype]
    """Removable string change."""
    type: Optional[EventChangeByExternalIdTypeClass]

    def __init__(self, asset_ids: Optional[EventChangeByExternalIdAssetIDS], description: Optional[EventChangeByExternalIdDescription], end_time: Optional[EventChangeByExternalIdEndTime], external_id: Optional[EventChangeByExternalIdExternalID], metadata: Optional[EventChangeByExternalIdMetadata], source: Optional[EventChangeByExternalIdSource], start_time: Optional[EventChangeByExternalIdStartTime], subtype: Optional[EventChangeByExternalIdSubtype], type: Optional[EventChangeByExternalIdTypeClass]) -> None:
        self.asset_ids = asset_ids
        self.description = description
        self.end_time = end_time
        self.external_id = external_id
        self.metadata = metadata
        self.source = source
        self.start_time = start_time
        self.subtype = subtype
        self.type = type


class EventChangeByExternalID:
    """Changes will be applied to event."""
    update: EventChangeByExternalIdUpdate
    """External Id provided by client. Should be unique within the project"""
    external_id: str

    def __init__(self, update: EventChangeByExternalIdUpdate, external_id: str) -> None:
        self.update = update
        self.external_id = external_id
