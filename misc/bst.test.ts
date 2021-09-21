import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Node } from './bst.ts'

Deno.test("binary search tree", () => {
  const arr = [1, 3, 5, 6, 10, 23, 65, 79, 201, 72561];

  const root = new Node(0);
  for (let el of arr) {
    root.insert(el);
  }

  asserts.assertEquals(root.contains(3), true);
  asserts.assertEquals(root.contains(8), false);
});