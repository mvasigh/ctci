export class NodeN {
  name: string;
  children: NodeN[];

  constructor(name: string, children?: NodeN[]) {
    this.name = name;
    this.children = children || [];
  }
}

export class NodeBinary {
  left?: NodeBinary;
  right?: NodeBinary;
  data: any;

  constructor(data: any) {
    this.data = data;
  }

  insert(value: any) {
    if (value <= this.data) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new NodeBinary(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new NodeBinary(value);
      }
    }
  }

  contains(value: any): boolean {
    if (this.data === value) return true;

    if (value < this.data) {
      return this.left ? this.left.contains(value) : false;
    } else {
      return this.right ? this.right.contains(value) : false;
    }
  }

  printInOrder() {
    this.left && this.left.printInOrder();
    console.log(this.data);
    this.right && this.right.printInOrder();
  }
}

// Binary tree terms!
// ======
// Complete binary tree: Every level is filled. The last level is filled as much as possible, from left to right.
// Full binary tree: Every node has either zero or two child nodes.
// Perfect binary tree: Every node has 2 children, all leaf nodes are on the same level.
