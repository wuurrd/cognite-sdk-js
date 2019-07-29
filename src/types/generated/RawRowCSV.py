from typing import Optional, List, Dict, Any


class RawRowCSV:
    """Raw row result written in CSV format, with column columnHeaders."""
    """Headers for the different columns in the response."""
    column_headers: Optional[List[str]]
    """Rows of column values, in same order as columnHeaders."""
    rows: Optional[List[List[Dict[str, Any]]]]

    def __init__(self, column_headers: Optional[List[str]], rows: Optional[List[List[Dict[str, Any]]]]) -> None:
        self.column_headers = column_headers
        self.rows = rows
