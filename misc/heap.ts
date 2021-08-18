const parent = (index: number) => Math.floor((index - 1) / 2);
const leftChild = (index: number) => index * 2 + 1;
const rightChild = (index: number) => index * 2 + 2;

type Comparator = (a: any, b: any) => boolean;

class Heap {
  _heap: number[];
  comparator: Comparator;

  constructor(comparator: Comparator) {
    this._heap = [];
    this.comparator = comparator;
  }

  isLeaf(index: number) {
    return (
      index >= Math.floor(this._heap.length / 2) && index < this._heap.length
    );
  }

  compare(a: number, b: number): boolean {
    if (this._heap[a] == null) return false;
    if (this._heap[b] == null) return true;

    return this.comparator(this._heap[a], this._heap[b]);
  }

  swap(a: number, b: number) {
    let temp = this._heap[a];
    this._heap[a] = this._heap[b];
    this._heap[b] = temp;
  }

  add(val: number) {
    this._heap.push(val);
    this.heapifyUp(this._heap.length - 1);
  }

  extract(): number {
    if (!this._heap.length) throw new Error("Heap is empty");

    const max = this._heap[0];
    const last = this._heap.pop();
    this._heap[0] = last as number;

    this.heapifyDown(0);

    return max;
  }

  heapifyUp(index: number) {
    let currIndex = index;
    let parentIndex = parent(index);

    while (currIndex > 0 && this.compare(currIndex, parentIndex)) {
      this.swap(currIndex, parentIndex);
      currIndex = parentIndex;
      parentIndex = parent(parentIndex);
    }
  }

  heapifyDown(index: number) {
    if (this.isLeaf(index)) return;

    let leftChildIndex = leftChild(index);
    let rightChildIndex = rightChild(index);
    let currIndex = index;

    if (this.compare(leftChildIndex, currIndex)) {
      currIndex = leftChildIndex;
    }

    if (this.compare(rightChildIndex, currIndex)) {
      currIndex = rightChildIndex;
    }

    if (currIndex !== index) {
      this.swap(currIndex, index);
      this.heapifyDown(currIndex);
    }
  }
}

export default Heap;