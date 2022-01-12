function computerToPhone(numbers) {
  return numbers.replace(/[0-9]/g, (v) =>
    v == 0
      ? 0
      : v == 7
      ? 1
      : v == 8
      ? 2
      : v == 9
      ? 3
      : v == 1
      ? 7
      : v == 2
      ? 8
      : v == 3
      ? 9
      : v
  );
}
