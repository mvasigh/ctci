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
    const hash = this._hash(key);

    if (!this._arr[hash]) {
      this._arr[hash] = [];
    }

    this._arr[hash].push([key, val]);

    return this;
  }

  get(key: string): any {
    const hash = this._hash(key);

    if (!this._arr[hash]) return undefined;

    const match = this._arr[hash].find((el: any[]) => el[0] === key);

    if (!match) return undefined;

    return match[1];
  }

  delete(key: string) {
    const hash = this._hash(key);

    if (!this._arr[hash]) return this;

    const index = this._arr[hash].findIndex((el: any[]) => el[0] === key);

    if (index < 0) return this;

    this._arr[hash].splice(index, 1);

    return this;
  }
}
