"use strict";
let coinCombo = function (cents) {
  let sum = [0, 0, 0, 0];
  while (cents >= 25) {
    sum[3]++;
    cents -= 25;
  }
  while (cents >= 10) {
    sum[2]++;
    cents -= 10;
  }
  while (cents >= 5) {
    sum[1]++;
    cents -= 5;
  }
  while (cents >= 1) {
    sum[0]++;
    cents -= 1;
  }
  return sum;
};
