export class Node {
  data: any;
  next?: Node;
  prev?: Node;

  constructor(data: any) {
    this.data = data;
  }

  print() {
    console.log(`Node { data: ${this.data} }`);
  }
}

export class LinkedList {
  head?: Node;
  tail?: Node;
  isDoublyLinked: boolean;

  constructor(isDoublyLinked: boolean = false) {
    this.isDoublyLinked = isDoublyLinked;
  }

  append(data: any) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let n = this.head;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
      if (this.isDoublyLinked) {
        n.next.prev = n;
      }
    }

    this.tail = node;

    return this;
  }

  prepend(data: any) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let n = this.head;
      this.head = node;
      this.head.next = n;
      if (this.isDoublyLinked) {
        this.head.next.prev = this.head;
      }
    }

    return this;
  }

  print() {
    if (!this.head) {
      return console.log("Linked List is empty!");
    }

    let n = this.head;
    n.print();
    while (n.next) {
      const arrow = this.isDoublyLinked ? "↕️" : "⬇️";
      console.log(arrow);
      n = n.next;
      n.print();
    }
  }

  toArray(): Array<any> {
    const array: any[] = [];

    if (!this.head) return array;

    let n = this.head;
    while (n.next) {
      array.push(n.data);
      n = n.next;
    }
    array.push(n.data);

    return array;
  }

  static from(array: Array<any>, isDoublyLinked: boolean = false): LinkedList {
    const list = new LinkedList(isDoublyLinked);

    for (let el of array) {
      list.append(el);
    }

    return list;
  }
}

export function Q1_removeDups(list: LinkedList) {
  const seen = new Set();

  if (!list.head) {
    return list;
  }

  let n = list.head;
  while (n) {
    seen.add(n.data);

    let next = n.next;

    while (next && seen.has(next.data)) {
      next = next.next;
    }

    n.next = next;

    if (!n.next) {
      break;
    }

    n = n.next;
  }
}

export function Q2_returnKthToLast(
  list: LinkedList,
  k: number
): Node | undefined {
  if (!list.head) return;

  let lastIndex = 0;
  let node = list.head;

  while (node.next) {
    lastIndex += 1;
    node = node.next;
  }

  if (k > lastIndex) return;

  node = list.head;
  for (let i = 0; i < lastIndex - k; i++) {
    if (node.next) {
      node = node.next;
    }
  }

  return node;
}

export function Q3_deleteMiddleNode(node: Node) {
  if (!node.next) {
    throw new Error("Cannot delete the last node");
  }

  const next = node.next;
  const data = next.data;

  node.data = data;
  node.next = next.next;
}

export function Q4_partition(list: LinkedList, val: number): LinkedList {
  if (!list.head) {
    throw new Error('Empty linked list provided');
  }

  const lowerPartition = new LinkedList();
  const upperPartition = new LinkedList();

  let node: Node | undefined = list.head;
  while (node) {
    if (node.data < val) {
      lowerPartition.append(node.data);
    } else {
      upperPartition.append(node.data);
    }
    node = node.next;
  }

  if (!lowerPartition.tail) {
    return upperPartition;
  } else {
    lowerPartition.tail.next = upperPartition.head;
    return lowerPartition;
  }
}