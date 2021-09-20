export function quicksort(arr: number[]) {
  function swap(_arr: number[], a: number, b: number) {
    let temp = _arr[b];
    _arr[b] = _arr[a];
    _arr[a] = temp;
  }

  function partition(
    _arr: number[],
    left: number,
    right: number,
    pivot: number
  ): number {
    while (left <= right) {
      while (_arr[left] < pivot) {
        left++;
      }

      while (_arr[right] > pivot) {
        right--;
      }

      if (left <= right) {
        swap(_arr, left, right);
        left++;
        right--;
      }
    }

    return left;
  }

  function sort(_arr: number[], left: number, right: number) {
    if (left >= right) return null;

    const pivot = _arr[Math.floor((left + right) / 2)];
    const index = partition(arr, left, right, pivot);
    sort(_arr, left, index - 1);
    sort(_arr, index, right);

    return _arr;
  }

  return sort(arr, 0, arr.length - 1);
}
