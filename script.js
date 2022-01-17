const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .map((v, i, arr) => (v === arr[i + 1] ? (v = "") : v))
    .join(` `)
    .replace(/\s+/g, " ")
    .trim();
