import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Q2_stackMin } from './exercises.ts'

Deno.test('Q2: Stack Min', () => {
  const StackMin = Q2_stackMin();

  const stack = new StackMin();
  stack.push(2);
  stack.push(3);
  stack.push(1);

  asserts.assertEquals(stack.min(), 1);

  stack.pop();

  asserts.assertEquals(stack.min(), 2);
})