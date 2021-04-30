export function Q1_isUnique(str: string): boolean {
  const seen = new Set();
  for (let char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}

export function Q2_checkPermutation(a: string, b: string): boolean {
  const chars = new Map();
  for (let char of a) {
    const occurrences = chars.get(char) || 0;
    chars.set(char, occurrences + 1);
  }
  for (let char of b) {
    const occurrences = chars.get(char) || 0;
    if (!occurrences) return false;
    chars.set(char, occurrences - 1);
  }
  return true;
}