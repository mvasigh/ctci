export function searchRecursive(arr: number[], target: number): boolean {
  function search(_arr: number[], tgt: number): boolean {
    if (!_arr.length) return false;

    const mid = Math.floor(_arr.length / 2);

    if (_arr[mid] === tgt) {
      return true;
    } else if (tgt < _arr[mid]) {
      return search(_arr.slice(0, mid), tgt);
    } else {
      return search(_arr.slice(mid + 1), tgt);
    }
  }

  return search(arr, target);
}

export function searchIterative(arr: number[], target: number): boolean {
  let _arr = arr.slice();

  while (_arr.length) {
    const mid = Math.floor((_arr.length / 2));

    if (_arr[mid] === target) {
      return true;
    } else if (target < _arr[mid]) {
      _arr = _arr.slice(0, mid);
    } else {
      _arr = _arr.slice(mid + 1);
    }
  }

  return false;
}