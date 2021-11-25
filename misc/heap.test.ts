import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import Heap from "./heap.ts";

Deno.test("Max heap", () => {
  const heap = new Heap((a, b) => a > b);
  const values = [10, 2, 3, 8, 6];

  for (let v of values) {
    heap.add(v);
  }

  const max = heap.extract();

  asserts.assertEquals(max, 10);
});

Deno.test("Min heap", () => {
  const heap = new Heap((a, b) => a < b);
  const values = [10, 2, 3, 8, 6];

  for (let v of values) {
    heap.add(v);
  }

  const min = heap.extract();

  asserts.assertEquals(min, 2);
});
