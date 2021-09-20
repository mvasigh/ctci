export class HashTable {
  _arr: any[];

  constructor(size: number = 127) {
    this._arr = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this._arr.length;
  }

  set(key: string, val: any) {
    this._arr[this._hash(key)] = val;

    return this;
  }

  get(key: string): any {
    return this._arr[this._hash(key)];
  }

  delete(key: string) {
    this._arr[this._hash(key)] = undefined;

    return this;
  }
}