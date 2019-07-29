from typing import Optional, List, Dict


class EventChangeAssetIDS:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class EventChangeDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeEndTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeMetadata:
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


class EventChangeSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeStartTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeSubtype:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeTypeClass:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class EventChangeUpdate:
    """Change that will be applied to the array object."""
    asset_ids: Optional[EventChangeAssetIDS]
    """Removable string change."""
    description: Optional[EventChangeDescription]
    end_time: Optional[EventChangeEndTime]
    """Removable string change."""
    external_id: Optional[EventChangeExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[EventChangeMetadata]
    """Removable string change."""
    source: Optional[EventChangeSource]
    start_time: Optional[EventChangeStartTime]
    """Removable string change."""
    subtype: Optional[EventChangeSubtype]
    """Removable string change."""
    type: Optional[EventChangeTypeClass]

    def __init__(self, asset_ids: Optional[EventChangeAssetIDS], description: Optional[EventChangeDescription], end_time: Optional[EventChangeEndTime], external_id: Optional[EventChangeExternalID], metadata: Optional[EventChangeMetadata], source: Optional[EventChangeSource], start_time: Optional[EventChangeStartTime], subtype: Optional[EventChangeSubtype], type: Optional[EventChangeTypeClass]) -> None:
        self.asset_ids = asset_ids
        self.description = description
        self.end_time = end_time
        self.external_id = external_id
        self.metadata = metadata
        self.source = source
        self.start_time = start_time
        self.subtype = subtype
        self.type = type


class EventChange:
    """Changes will be applied to event."""
    update: EventChangeUpdate
    """Javascript friendly internal ID given to the object."""
    id: Optional[int]
    """External Id provided by client. Should be unique within the project"""
    external_id: Optional[str]

    def __init__(self, update: EventChangeUpdate, id: Optional[int], external_id: Optional[str]) -> None:
        self.update = update
        self.id = id
        self.external_id = external_id
