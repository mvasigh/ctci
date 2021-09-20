import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { HashTable } from "./hashtable.ts";

Deno.test("hashtable", () => {
  const key1 = "foo";
  const val1 = { foo: "bar" };

  const key2 = "oof";
  const val2 = { foo: "bar" };

  const ht = new HashTable();

  ht.set(key1, val1);
  ht.set(key2, val2);

  asserts.assertEquals(ht.get(key1), val1);
  asserts.assertEquals(ht.get(key2), val2);
  
  ht.delete(key1);
  
  asserts.assertEquals(ht.get(key1), undefined);
  asserts.assertEquals(ht.get(key2), val2);
});
