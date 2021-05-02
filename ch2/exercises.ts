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
}

