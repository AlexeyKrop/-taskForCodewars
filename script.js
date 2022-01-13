function paul(x) {
  let n = 0;
  x.map((v) =>
    v === "Petes kata"
      ? (n += 10)
      : v === "kata"
      ? (n += 5)
      : v === "eating"
      ? (n += 1)
      : null
  );
  if (n < 40) return "Super happy!";
  if (n >= 40 && n < 70) return "Happy!";
  if (n >= 70 && n < 100) return "Sad!";
  if (n >= 100) return "Miserable!";
}
