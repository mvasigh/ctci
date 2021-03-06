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

  append(data: any): LinkedList {
    return this.appendNode(new Node(data));
  }

  appendNode(node: Node): LinkedList {
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
    throw new Error("Empty linked list provided");
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

export function Q5_sumLists(listA: LinkedList, listB: LinkedList): LinkedList {
  function reduceList(list: LinkedList): number {
    let pow = 0;
    let val = 0;
    let n = list.head;

    while (n) {
      if (n.data >= 10 || n.data < 0) {
        throw new Error("Must be a single-digit integer");
      }

      val += n.data * 10 ** pow;
      pow += 1;
      n = n.next;
    }
    return val;
  }

  function expandToList(num: number): LinkedList {
    let pow = 0;
    let val = num;
    let list = new LinkedList();

    while (val >= 10 ** pow) {
      let data = (val % 10 ** (pow + 1)) / 10 ** pow;
      list.append(data);

      val -= val % 10 ** (pow + 1);
      pow += 1;
    }

    return list;
  }

  const sum = reduceList(listA) + reduceList(listB);
  return expandToList(sum);
}

export function Q6_palindrome(list: LinkedList): boolean {
  if (!list.head || !list.tail) return false;

  if (list.head.data !== list.tail.data) return false;

  const arr = list.toArray();

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let b = arr[arr.length - i - 1];

    if (a !== b) {
      return false;
    }
  }

  return true;
}

export function Q7_intersection(
  listA: LinkedList,
  listB: LinkedList
): Node | void {
  if (!listA.head || !listB.head) {
    return;
  }

  let nodes = new Set();
  let nodeA: Node | undefined = listA.head;
  while (nodeA) {
    nodes.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB: Node | undefined = listB.head;
  while (nodeB) {
    if (nodes.has(nodeB)) {
      return nodeB;
    }
    nodeB = nodeB.next;
  }
}

export function Q8_loopDetection(
  list: LinkedList
): Node | void {
  const nodes = new Set();
  let node = list.head;
  while (node) {
    if (nodes.has(node.next)) {
      return node;
    }

    nodes.add(node);
    node = node.next;
  }
}