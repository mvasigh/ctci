import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import {
  Q1_isUnique,
  Q2_checkPermutation,
  Q3_URLify,
  Q4_palindromePermutations,
  Q5_oneAway
} from "./exercises.ts";

Deno.test("Q1: Is Unique", () => {
  assertEquals(Q1_isUnique("abcdef"), true);
  assertEquals(Q1_isUnique("abcabc"), false);
  assertEquals(Q1_isUnique("foo"), false);
});

Deno.test("Q2: Check Permutations", () => {
  assertEquals(Q2_checkPermutation("babababa", "foo"), false);
  assertEquals(Q2_checkPermutation("racecar", "care"), true);
});

Deno.test("Q3: URLify", () => {
  assertEquals(Q3_URLify("hello world", 11), "hello%20world");
  assertEquals(Q3_URLify("hello world     ", 11), "hello%20world");
  assertEquals(Q3_URLify("hello world     ", 12), "hello%20world%20");
});

Deno.test("Q4: Palindrome Permutation", () => {
  assertEquals(Q4_palindromePermutations("Tact coa"), true);
  assertEquals(Q4_palindromePermutations("cra e   rac"), true);
  assertEquals(Q4_palindromePermutations("aaaaae"), false);
});

Deno.test('Q5: One Away', () => {
  assertEquals(Q5_oneAway('pale', 'ple'), true);
  assertEquals(Q5_oneAway('pales', 'pale'), true);
  assertEquals(Q5_oneAway('pale', 'bale'), true);
  assertEquals(Q5_oneAway('pale', 'bake'), false);
})