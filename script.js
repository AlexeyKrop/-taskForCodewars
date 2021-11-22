function pipeFix(numbers) {
  let q = Math.max.apply(null, numbers);
  let result = [];
  for (let i = Math.min.apply(null, numbers); i <= q; i++) result.push(i);
  return result;
}
