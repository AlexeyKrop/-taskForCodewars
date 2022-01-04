function onesCounter(input) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      count += 1;
    } else {
      if (count) {
        arr.push(count);
      }
      count = 0;
    }
  }
  if (count) {
    arr.push(count);
  }
  return arr;
}
