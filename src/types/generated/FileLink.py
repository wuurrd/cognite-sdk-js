from typing import Optional


class FileLink:
    download_url: Optional[str]

    def __init__(self, download_url: Optional[str]) -> None:
        self.download_url = download_url
