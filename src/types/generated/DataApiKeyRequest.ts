/*!
 * Copyright 2019 Cognite AS
 */

export interface DataAPIKeyRequest {
  items: DataApiKeyRequestItem[];
}

export interface DataApiKeyRequestItem {
  serviceAccountId: number;
}
