class Node<T> {
  data: T;
  next?: Node<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class Stack<T> {
  top?: Node<T>;

  pop(): T {
    if (!this.top) {
      throw new Error("Stack is empty");
    }

    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  push(item: T | Node<T>): void {
    const node = item instanceof Node ? item : new Node<T>(item);
    node.next = this.top;
    this.top = node;
  }

  peek(): T {
    if (!this.top) {
      throw new Error("Stack is empty");
    }
    return this.top.data;
  }

  isEmpty(): boolean {
    return !!this.top;
  }
}

class Queue<T> {
  first?: Node<T>;
  last?: Node<T>;

  add(item: T) {
    const node = new Node<T>(item);

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;

    if (!this.first) {
      this.first = this.last;
    }
  }

  remove(): T {
    if (!this.first) {
      throw new Error("Queue is empty");
    }

    const node = this.first;

    this.first = node.next;

    if (!this.first) {
      this.last = this.first;
    }

    return node.data;
  }

  peek(): T {
    if (!this.first) throw new Error("Queue is empty");

    return this.first.data;
  }
}

export function Q2_stackMin() {
  class StackMin extends Stack<number> {
    minNumber?: number;
    nodeLastMin: Map<Node<number>, number | undefined>;

    constructor() {
      super();
      this.nodeLastMin = new Map();
    }

    push(data: number) {
      const node = new Node(data);
      this.nodeLastMin.set(node, this.minNumber);
      this.minNumber =
        this.minNumber !== undefined ? Math.min(this.minNumber, data) : data;

      return super.push(node);
    }

    pop(): number {
      const node = this.top;

      if (node) {
        this.minNumber = this.nodeLastMin.get(node);
      }

      return super.pop();
    }

    min(): number {
      if (this.minNumber === undefined) {
        throw new Error("Stack is empty!");
      }
      return this.minNumber;
    }
  }

  return StackMin;
}
