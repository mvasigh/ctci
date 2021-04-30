import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Q1_isUnique, Q2_checkPermutation } from "./exercises.ts";

Deno.test("Q1: Is Unique", () => {
  assertEquals(Q1_isUnique("abcdef"), true);
  assertEquals(Q1_isUnique("abcabc"), false);
  assertEquals(Q1_isUnique("foo"), false);
});

Deno.test("Q2: Check Permutations", () => {
  assertEquals(Q2_checkPermutation("babababa", "foo"), false);
  assertEquals(Q2_checkPermutation("racecar", "care"), true);
});
