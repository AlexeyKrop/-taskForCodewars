function maxSumBetweenTwoNegatives(a) {
  const onlyNeg = a.filter((v) => v < 0);
  if (onlyNeg.length < 2) {
    return -1;
  }
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      let count = 0;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < 0) {
          arr.push(count);
          break;
        } else {
          count += a[j];
        }
      }
    }
  }
  return Math.max(...arr);
}
