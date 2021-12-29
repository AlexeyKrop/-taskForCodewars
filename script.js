var maxRedigit = function (num) {
  if (String(num).length === 3) {
    if (typeof num === "number" && num > 0) {
      num = String(num).split("");
      num.sort((a, b) => b - a);
      num = num.join("");
      return +num;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
maxRedigit(99);
