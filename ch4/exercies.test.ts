import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { NodeBinary, NodeN, graphFromString } from "./exercies.ts";

Deno.test("BinaryNode", () => {
  const data = [...Array(20)].map(() => Math.floor(Math.random() * 100));
  const root = new NodeBinary(50);

  for (let val of data) {
    root.insert(val);
  }

  for (let val of data) {
    asserts.assertEquals(root.contains(val), true);
  }

  root.printInOrder();
});

Deno.test("graphFromString - directed", () => {
  const graphStr = `
    A > B
    B > C
    A > C
    D > C
  `;

  const graph = graphFromString(graphStr);

  const root = graph.get("A");

  asserts.assertEquals(root?.children.includes(graph.get("C")), true);
  asserts.assertEquals(root?.children.includes(graph.get("D")), false);
  asserts.assertEquals(graph.get("D")?.children.includes(graph.get("C")), true);
});

Deno.test("graphFromString - undirected", () => {
  const graphStr = `
    B <> D
    C <> D
    A <> C
  `;

  const graph = graphFromString(graphStr);

  console.log(graph);

  asserts.assertEquals(graph.get("C")?.children.includes(graph.get("D")), true);
  asserts.assertEquals(graph.get("D")?.children.includes(graph.get("C")), true);
});
