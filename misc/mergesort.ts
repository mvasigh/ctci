export function mergesort(arr: number[]): number[] {
  function merge(a: number[], b: number[]): number[] {
    let merged: number[] = [];

    while (a.length && b.length) {
      if (a[0] < b[0]) {
        merged.push(a.shift() as number);
      } else {
        merged.push(b.shift() as number);
      }
    }

    return [...merged, ...a, ...b];
  }

  function sort(_arr: number[]): number[] {
    if (_arr.length < 2) return _arr;

    // Grab the middle point between start and end
    let middle = Math.floor(_arr.length / 2);

    let rightArr = _arr;
    let leftArr = _arr.splice(0, middle);

    // Recursively sort the two halves
    return merge(sort(leftArr), sort(rightArr));
  }

  return sort(arr);
}
