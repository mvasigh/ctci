export function getPrimeFlags(max: number): boolean[] {
  if (max < 2) return [];

  const flags = Array.from({ length: max + 1 }).fill(true) as boolean[];
  let prime = 2;

  while (prime <= Math.sqrt(max)) {
    crossOff(flags, prime);
    prime = getNextPrime(flags, prime);
  }

  flags[0] = false;
  flags[1] = false;
  
  return flags;
}

function crossOff(flags: boolean[], prime: number) {
  for (let i = prime * prime; i < flags.length; i += prime) {
    flags[i] = false;
  }
}

function getNextPrime(flags: boolean[], prime: number) {
  let next = prime + 1;

  while (next < flags.length && !flags[next]) {
    next += 1;
  }

  return next;
}
