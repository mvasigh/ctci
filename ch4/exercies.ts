export class ListNode {
  val: any;
  next: ListNode | null;

  constructor(val?: any) {
    this.val = val;
    this.next = null;
  }
}

export class NodeN {
  name: string;
  children: any[];

  constructor(name: string, children?: any[]) {
    this.name = name;
    this.children = children || [];
  }
}

export class NodeBinary {
  left?: NodeBinary | null;
  right?: NodeBinary | null;
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

export function graphFromString(input: string): Map<string, NodeN> {
  /**
   * Here, we expect a string representation of our graph.
   * A relation is represented as such: A > B (directed) or A <> B (undirected)
   */

  const nodes = new Map<string, NodeN>();

  for (let line of input.trim().split("\n")) {
    const [a, rel, b] = line.trim().split(" ");

    if (!nodes.has(a)) {
      nodes.set(a, new NodeN(a));
    }

    if (!nodes.has(b)) {
      nodes.set(b, new NodeN(b));
    }

    const nodeA = nodes.get(a);
    const nodeB = nodes.get(b);

    if (!nodeA || !nodeB) continue;

    if (rel === ">") {
      nodeA.children.push(nodeB);
    } else if (rel === "<>") {
      nodeA.children.push(nodeB);
      nodeB.children.push(nodeA);
    } else {
      throw new Error(
        `Unexpected relation type ${rel}, must be either > or <>`
      );
    }
  }

  return nodes;
}

export function Q1_routeBetweenNodes(nodeA: NodeN, nodeB: NodeN): boolean {
  // Use a BFS approach since it is more optimal for finding a path between nodes
  let visited = new Map<NodeN, boolean>();

  // We are going to create a queue to use for our BFS
  let queue = [];

  // Accept nodeA as the root
  let root = nodeA;
  visited.set(root, true);
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();

    if (node === nodeB) return true;

    for (let adj of node?.children ?? []) {
      if (!visited.get(adj)) {
        visited.set(adj, true);
        queue.push(adj);
      }
    }
  }

  return false;
}

export function Q2_minimalTree(integers: number[]): NodeBinary | null {
  function createMinimalBst(
    arr: number[],
    start: number,
    end: number
  ): NodeBinary | null {
    if (end < start) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new NodeBinary(integers[mid]);
    node.left = createMinimalBst(arr, start, mid - 1);
    node.right = createMinimalBst(arr, mid + 1, end);

    return node;
  }

  return createMinimalBst(integers, 0, integers.length - 1);
}