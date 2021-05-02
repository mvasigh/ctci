import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { LinkedList, Q1_removeDups } from "./exercises.ts";

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
      expected: [1, 2, 3, 4, 5, 6]
    },
    {
      original: [1, 1, 2, 1],
      expected: [1, 2]
    },
    {
      original: [2, 2, 2, 1],
      expected: [2, 1]
    },
    {
      original: [],
      expected: []
    },
  ]

  for (let { original, expected } of tests) {
    const list = LinkedList.from(original);
    Q1_removeDups(list);
    const listArr = list.toArray();
    asserts.assertEquals(list.toArray(), expected);
  }
});
