import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { LinkedList } from "./exercises.ts";

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
