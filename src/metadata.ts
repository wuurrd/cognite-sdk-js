// Copyright 2019 Cognite AS

export interface Metadata {
  status: number;
  headers: { [key: string]: string };
}

/** @hidden */
export class MetadataMap {
  private map: WeakMap<any, Metadata>;
  constructor() {
    this.map = new WeakMap();
  }

  public addAndReturn<T>(value: T, metadata: Metadata): T {
    try {
      this.map.set(value, {
        // we extract out only what is necessary
        status: metadata.status,
        headers: metadata.headers,
      });
      return value;
    } catch (err) {
      console.log(value);
      console.log(err);
      throw err;
    }
  }

  public get(value: any): undefined | Metadata {
    return this.map.get(value);
  }
}
