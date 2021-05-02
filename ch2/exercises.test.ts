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
