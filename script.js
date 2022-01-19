function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((v) => v.slice(0, 1))
    .join("")
    .replace(/(o)/gi, 0)
    .replace(/(s)/gi, 5)
    .replace(/(i)/gi, 1);
}
