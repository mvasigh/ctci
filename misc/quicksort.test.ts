import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { quicksort } from './quicksort.ts'

Deno.test('quicksort', () => {
  const input = [3, 2, 8, 10, -1, 44];
  const expected = [-1, 2, 3, 8, 10, 44];

  asserts.assertEquals(quicksort(input), expected);
})