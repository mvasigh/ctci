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

// TODO
export function Q1_removeDups(list: LinkedList) {
  const seen = new Set();

  if (!list.head) {
    return list;
  }

  let n = list.head;
  while (n.next) {
    if (seen.has(n.data)) {
      // If I've seen this value before, I want to remove the node
    } else {
      // If it's a new value, store it in the set
    }
    n = n.next;
  }
}
