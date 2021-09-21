import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { searchRecursive, searchIterative } from "./binarysearch.ts";

Deno.test("binary search: recursive", () => {
  const arr = [1, 3, 5, 6, 10, 23, 65, 79, 201, 72561];
  const targetTrue = 6;
  const targetFalse = 8;

  asserts.assertEquals(searchRecursive(arr, targetTrue), true);
  asserts.assertEquals(searchRecursive(arr, targetFalse), false);
});

Deno.test("binary search: iterative", () => {
  const arr = [1, 3, 5, 6, 10, 23, 65, 79, 201, 72561];
  const targetTrue = 6;
  const targetFalse = 8;

  asserts.assertEquals(searchIterative(arr, targetTrue), true);
  asserts.assertEquals(searchIterative(arr, targetFalse), false);
});
