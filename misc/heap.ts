const parent = (index: number) => Math.floor((index - 1) / 2);
const leftChild = (index: number) => index * 2 + 1;
const rightChild = (index: number) => index * 2 + 2;

class MaxHeap {
  _heap: number[];

  constructor() {
    this._heap = [];
  }

  isLeaf(index: number) {
    return index >= Math.floor(this._heap.length / 2) && index < this._heap.length;
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

  extractMax(): number {
    if (!this._heap.length) throw new Error('Heap is empty');

    const max = this._heap[0];
    const last = this._heap.pop();
    this._heap[0] = last as number;

    this.heapifyDown(0);

    return max;
  }

  heapifyUp(index: number) {
    let currIndex = index;
    let parentIndex = parent(index);

    while (currIndex > 0 && this._heap[currIndex] > this._heap[parentIndex]) {
      this.swap(currIndex, parentIndex);
      currIndex = parentIndex;
      parentIndex = parent(parentIndex);
    }
  }

  heapifyDown(index: number) {
    if (this.isLeaf(index)) return;

    let leftChildIndex = leftChild(index);
    let rightChildIndex = rightChild(index);
    let largestIndex = index;

    if (this._heap[leftChildIndex] > this._heap[index]) {
      largestIndex = leftChildIndex
    }

    if (this._heap[rightChildIndex] >= this._heap[index]) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      this.swap(largestIndex, index);
      this.heapifyDown(largestIndex);
    }
  }
}
