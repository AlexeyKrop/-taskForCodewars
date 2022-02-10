function per(n) {
  let arr = [];
  while (String(n).length > 1) {
    n = String(n)
      .split("")
      .reduce((a, b) => {
        return a * b;
      });
    arr.push(n);
  }
  return arr;
}
per(69);
