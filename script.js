function pairZeros(arr) {
  let zero = 0;
  return arr
    .map((v) => {
      if (v === 0) {
        if (v === 0) {
          zero++;
        }
        if (v === 0 && zero % 2 === 0) return (v = null);
      }
      return v;
    })
    .filter((v) => v !== null);
}
