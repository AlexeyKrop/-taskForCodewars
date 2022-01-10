function duplicateElements(m, n) {
  return m.some((v, i, arr) => arr.includes(n[i]));
}
