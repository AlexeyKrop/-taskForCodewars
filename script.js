function bitsBattle(numbers) {
  const even = numbers
    .filter((v) => v % 2 === 0)
    .map((v) => v.toString(2))
    .join("")
    .replace(/1/g, "").length;
  const odd = numbers
    .filter((v) => v % 2 !== 0)
    .map((v) => v.toString(2))
    .join("")
    .replace(/0/g, "").length;
  return even > odd ? "evens win" : even < odd ? "odds win" : "tie";
}
