import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { NodeBinary } from './exercies.ts'

Deno.test('BinaryNode', () => {
  const data = [...Array(20)].map(() => Math.floor(Math.random() * 100));
  const root = new NodeBinary(50);

  for (let val of data) {
    root.insert(val);
  }

  for (let val of data) {
    asserts.assertEquals(root.contains(val), true);
  }

  root.printInOrder();
})