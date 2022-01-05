function elevatorDistance(array) {
  return array
    .map((v, i, arr) => arr[i] - arr[i - 1])
    .filter((v) => !isNaN(v))
    .reduce((a, b) => a + Math.abs(b), 0);
}
