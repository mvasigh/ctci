import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import {
  Q1_isUnique,
  Q2_checkPermutation,
  Q3_URLify,
  Q4_palindromePermutations,
  Q5_oneAway,
  Q6_stringCompression,
  Q7_rotateMatrix,
  Q8_zeroMatrix,
  Q9_stringRotation
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

Deno.test("Q5: One Away", () => {
  assertEquals(Q5_oneAway("pale", "ple"), true);
  assertEquals(Q5_oneAway("pales", "pale"), true);
  assertEquals(Q5_oneAway("pale", "bale"), true);
  assertEquals(Q5_oneAway("pale", "bake"), false);
});

Deno.test("Q6: String Compression", () => {
  assertEquals(Q6_stringCompression("aabcccccaaa"), "a2b1c5a3");
  assertEquals(Q6_stringCompression(""), "");
  assertEquals(Q6_stringCompression("abcdefgh"), "abcdefgh");
});

Deno.test("Q7: Rotate Matrix", () => {
  const original = [
    [1, 2],
    [3, 4],
  ];

  const expected = [
    [2, 4],
    [1, 3],
  ];

  assertEquals(Q7_rotateMatrix(original), expected);
});

Deno.test("Q8: Zero Matrix", () => {
  const original = [
    [1, 0, 2],
    [2, 4, 3],
  ];

  const expected = [
    [0, 0, 0],
    [2, 0, 3],
  ];

  assertEquals(Q8_zeroMatrix(original), expected);
  assertEquals(Q8_zeroMatrix([]), []);
});

Deno.test("Q9: String Rotation", () => {
  assertEquals(Q9_stringRotation('waterbottle', 'erbottlewat'), true)
})
