export class Bundle<T> {
  private _list: Map<string, T> = new Map();

  public add(name: string, asset: T): void {
    // if (this._list.has(name)) {
    //   throw new Error(
    //     `The ${name} asset is already loaded. The new asset will not be added.`
    //   );
    // }

    this._list.set(name, asset);
  }

  public get(name: string): T {
    const asset = this._list.get(name);

    if (!asset) {
      throw new Error(`Can't find asset ${name}!`);
    }

    return asset;
  }
}
