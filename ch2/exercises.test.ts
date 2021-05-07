import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import {
  LinkedList,
  Node,
  Q1_removeDups,
  Q2_returnKthToLast,
  Q3_deleteMiddleNode,
  Q4_partition,
  Q5_sumLists,
  Q6_palindrome,
  Q7_intersection,
  Q8_loopDetection
} from "./exercises.ts";

Deno.test("Singly Linked List", () => {
  const list = new LinkedList();
  list.append(1).append(2).append(3).append(4).prepend(0);
  list.print();
});

Deno.test("Doubly Linked List", () => {
  const list = new LinkedList(true);
  list.append(1).append(2).append(3).append(4).prepend(0);
  list.print();
});

Deno.test("LinkedList.from()", () => {
  const list = LinkedList.from([1, 2, 3, 4]);
  asserts.assertEquals(list.head?.data, 1);
  asserts.assertEquals(list.toArray(), [1, 2, 3, 4]);
  list.print();
});

Deno.test("Q1: Remove Dups", () => {
  const tests = [
    {
      original: [1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 1],
      expected: [1, 2, 3, 4, 5, 6],
    },
    {
      original: [1, 1, 2, 1],
      expected: [1, 2],
    },
    {
      original: [2, 2, 2, 1],
      expected: [2, 1],
    },
    {
      original: [],
      expected: [],
    },
  ];

  for (let { original, expected } of tests) {
    const list = LinkedList.from(original);
    Q1_removeDups(list);
    asserts.assertEquals(list.toArray(), expected);
  }
});

Deno.test("Q2: Return Kth To Last", () => {
  const list = LinkedList.from([1, 2, 3, 4, 5]);
  const expected = 4;

  asserts.assertEquals(Q2_returnKthToLast(list, 1)?.data, expected);
});

Deno.test("Q3: Delete Middle Node", () => {
  const list = LinkedList.from([1, 2, 3, 4]);
  const node = list.head?.next as Node;

  Q3_deleteMiddleNode(node);

  list.print();
});

Deno.test("Q4: Partition", () => {
  const partitionVal = 10;
  const list = LinkedList.from([1, 2, 8, 0, 44, 12, 3, 8, 9]);
  const result = Q4_partition(list, 10);

  let partitioned = false;
  let node = result.head as Node;

  while (node) {
    if (node.data >= partitionVal && !partitioned) {
      partitioned = true;
    }

    asserts.assertEquals(node.data >= partitionVal, partitioned);

    if (!node.next) break;
    node = node.next;
  }
});

Deno.test("Q5: Sum Lists", () => {
  const pairs = [
    {
      input: [
        [0, 0, 1],
        [0, 5],
      ],
      expected: [0, 5, 1],
    },
    {
      input: [
        [0, 1, 0],
        [2, 2],
      ],
      expected: [2, 3],
    },
  ];

  for (let { input, expected } of pairs) {
    const listA = LinkedList.from(input[0]);
    const listB = LinkedList.from(input[1]);
    const sum = Q5_sumLists(listA, listB);

    asserts.assertEquals(expected, sum.toArray());
  }
});

Deno.test("Q6: Palindrome", () => {
  const tests = [
    {
      input: "banana",
      expected: false,
    },
    {
      input: "racecar",
      expected: true,
    },
    {
      input: "",
      expected: false,
    },
    {
      input: "bccb",
      expected: true,
    },
    {
      input: "racebar",
      expected: false,
    },
  ];

  for (let { input, expected } of tests) {
    const list = LinkedList.from(input.split(""));
    asserts.assertEquals(Q6_palindrome(list), expected);
  }
});

Deno.test("Q7: Intersection", () => {
  // Intersecting example
  let node = new Node(42);
  let listA = LinkedList.from([1, 2, 3]);
  listA.appendNode(node);
  listA.append(4).append(3);

  let listB = LinkedList.from([0, 1]);
  listB.appendNode(node);
  listB.append(1).append(3);

  asserts.assertEquals(Q7_intersection(listA, listB), node);

  // Non-intersecting example
  asserts.assertEquals(
    Q7_intersection(LinkedList.from([1, 3, 4]), LinkedList.from([1, 3, 5])),
    undefined
  );
});

Deno.test('Q8: Loop Detection', () => {
  const list = LinkedList.from([1, 2, 3]);
  const node = new Node(22)
  list.appendNode(node);
  node.next = list.head;

  asserts.assertEquals(Q8_loopDetection(list), node);
})