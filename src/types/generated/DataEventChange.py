from typing import Optional, List, Dict


class DataEventChangeAssetIDS:
    """Change that will be applied to the array object."""
    set: Optional[List[int]]
    add: Optional[List[int]]
    remove: Optional[List[int]]

    def __init__(self, set: Optional[List[int]], add: Optional[List[int]], remove: Optional[List[int]]) -> None:
        self.set = set
        self.add = add
        self.remove = remove


class DataEventChangeDescription:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeEndTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeExternalID:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeMetadata:
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


class DataEventChangeSource:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeStartTime:
    set: Optional[int]
    set_null: Optional[bool]

    def __init__(self, set: Optional[int], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeSubtype:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeTypeClass:
    """Removable string change."""
    set: Optional[str]
    set_null: Optional[bool]

    def __init__(self, set: Optional[str], set_null: Optional[bool]) -> None:
        self.set = set
        self.set_null = set_null


class DataEventChangeUpdate:
    """Change that will be applied to the array object."""
    asset_ids: Optional[DataEventChangeAssetIDS]
    """Removable string change."""
    description: Optional[DataEventChangeDescription]
    end_time: Optional[DataEventChangeEndTime]
    """Removable string change."""
    external_id: Optional[DataEventChangeExternalID]
    """Custom, application specific metadata. String key -> String value. Limits: Maximum length
    of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
    """
    metadata: Optional[DataEventChangeMetadata]
    """Removable string change."""
    source: Optional[DataEventChangeSource]
    start_time: Optional[DataEventChangeStartTime]
    """Removable string change."""
    subtype: Optional[DataEventChangeSubtype]
    """Removable string change."""
    type: Optional[DataEventChangeTypeClass]

    def __init__(self, asset_ids: Optional[DataEventChangeAssetIDS], description: Optional[DataEventChangeDescription], end_time: Optional[DataEventChangeEndTime], external_id: Optional[DataEventChangeExternalID], metadata: Optional[DataEventChangeMetadata], source: Optional[DataEventChangeSource], start_time: Optional[DataEventChangeStartTime], subtype: Optional[DataEventChangeSubtype], type: Optional[DataEventChangeTypeClass]) -> None:
        self.asset_ids = asset_ids
        self.description = description
        self.end_time = end_time
        self.external_id = external_id
        self.metadata = metadata
        self.source = source
        self.start_time = start_time
        self.subtype = subtype
        self.type = type


class DataEventChangeItem:
    """Changes will be applied to event."""
    update: DataEventChangeUpdate
    """Javascript friendly internal ID given to the object."""
    id: Optional[int]
    """External Id provided by client. Should be unique within the project"""
    external_id: Optional[str]

    def __init__(self, update: DataEventChangeUpdate, id: Optional[int], external_id: Optional[str]) -> None:
        self.update = update
        self.id = id
        self.external_id = external_id


class DataEventChange:
    items: List[DataEventChangeItem]

    def __init__(self, items: List[DataEventChangeItem]) -> None:
        self.items = items
