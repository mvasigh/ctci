import * as asserts from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { getPrimeFlags } from "./sieveOfEratosthenes.ts";

Deno.test("Sieve of Eratosthenes", () => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const flags = getPrimeFlags(30);

  for (let i = 0; i < 30; i++) {
    const expected = primes.includes(i);
    asserts.assertEquals(flags[i], expected);
  }
});
