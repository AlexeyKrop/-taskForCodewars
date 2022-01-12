function oddest(a) {
  let arr = a.map((x) => [...(x >>> 0).toString(2)].reverse());
  return a[arr.reduce((i, a, b) => (a > arr[i] ? b : i), 0)];
}
