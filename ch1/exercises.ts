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

export function Q3_URLify(str: string, length: number) {
  // convert str to char array
  const strArr = str.split("");

  // delete excess characters
  strArr.splice(length);

  // replace spaces with %20
  let i = 0;
  while (i < strArr.length) {
    if (strArr[i] === " ") {
      strArr.splice(i, 1, "%", "2", "0");
      i += 3;
    } else {
      i++;
    }
  }

  return strArr.join("");
}

export function Q4_palindromePermutations(_str: string): boolean {
  const str = _str.toLowerCase();
  const firstCharCode = "a".charCodeAt(0);
  const lastCharCode = "z".charCodeAt(0);

  const uniq = new Set();

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < firstCharCode || charCode > lastCharCode) continue;
    if (uniq.has(str[i])) {
      uniq.delete(str[i]);
    } else {
      uniq.add(str[i]);
    }
  }

  return uniq.size === 0 || uniq.size === 1;
}

export function Q5_oneAway(a: string, b: string): boolean {
  function oneAway(a: string, b: string): boolean {
    if (a.length === b.length) {
      return isOneReplaceAway(a, b);
    } else if (a.length === b.length + 1) {
      return isOneRemoveAway(a, b);
    } else if (b.length === a.length + 1) {
      return isOneRemoveAway(b, a);
    }
    return false;
  }

  function isOneReplaceAway(a: string, b: string): boolean {
    let hasReplaced = false;
    for (let i = 0; i < a.length; i++) {
      const charA = a[i];
      const charB = b[i];

      if (charA === charB) continue;

      if (hasReplaced) return false;

      hasReplaced = true;
    }
    return true;
  }

  function isOneRemoveAway(longer: string, shorter: string): boolean {
    let offset = 0;

    for (let i = 0; i < shorter.length; i++) {
      const charS = shorter[i];
      const charL = longer[i + offset];

      if (charL === charS) continue;

      if (offset) return false;

      if (charS !== longer[i + 1]) return false;

      offset += 1;
    }

    return true;
  }

  return oneAway(a, b);
}

export function Q6_stringCompression(str: string): string {
  let compressed = "";
  let char;
  let count = 0;

  for (let i = 0; i <= str.length; i++) {
    const currChar = str[i];
    if (!char || currChar === char) {
      count += 1;
    } else {
      compressed += char + count;
      count = 1;
    }
    char = currChar;
  }

  return compressed.length < str.length ? compressed : str;
}

export function Q7_rotateMatrix(
  matrix: Array<Array<number>>
): Array<Array<number>> {
  // We can assume a square N x N matrix
  const rotated = Array(matrix.length)
    .fill(null)
    .map(() =>
      Array(matrix.length)
        .fill(null)
        .map(() => 0)
    );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      rotated[matrix.length - j - 1][i] = matrix[i][j];
    }
  }

  return rotated;
}

export function Q8_zeroMatrix(
  matrix: Array<Array<number>>
): Array<Array<number>> {
  const zeroedRows = new Set();
  const zeroedCols = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (zeroedRows.has(row) || zeroedCols.has(col)) {
        continue;
      }

      if (matrix[row][col] === 0) {
        zeroedRows.add(row);
        zeroedCols.add(col);

        matrix[row] = matrix[row].map(() => 0);
        matrix.forEach(row => row[col] = 0);
      }
    }
  }

  return matrix;
}