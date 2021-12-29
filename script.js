function alternateCase(s) {
  return s
    .split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
}
