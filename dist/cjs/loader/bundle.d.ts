export declare class Bundle<T> {
    private _list;
    add(name: string, asset: T): void;
    get(name: string): T;
}
