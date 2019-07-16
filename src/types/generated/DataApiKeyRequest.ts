/*!
 * Copyright 2019 Cognite AS
 */

export interface DataApiKeyRequest {
  items: DataApiKeyRequestItem[];
}

export interface DataApiKeyRequestItem {
  serviceAccountId: number;
}
