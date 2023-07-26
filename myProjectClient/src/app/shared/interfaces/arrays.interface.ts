export interface HashTable<T> {
    [key: string]: T;
}
export interface KeyValuePair<TKey, TValue> {
    Key: TKey;
    Value: TValue;
}