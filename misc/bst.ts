export class Node {
  data: number;
  left?: Node;
  right?: Node;

  constructor(data: number) {
    this.data = data;
  }

  insert(data: number) {
    if (data <= this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  find(value: number): Node | null {
    if (this.data === value) return this;

    if (value < this.data) {
      if (this.left) {
        return this.left.find(value);
      } else {
        return null;
      }
    } else {
      if (this.right) {
        return this.right.find(value);
      } else {
        return null;
      }
    }
  }

  contains(value: number): boolean {
    return Boolean(this.find(value));
  }

  print() {
    if (this.left) {
      this.left.print();
    }
    console.log(this.data);
    if (this.right) {
      this.right.print();
    }
  }
}
