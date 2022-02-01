"use strict";
function uglifyWord(s) {
  s = s.toLowerCase().split("");
  let flag = 1;
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      if (flag === 1) {
        let str = s[i].toUpperCase();
        s[i] = str;
        flag = 0;
      } else {
        let str = s[i].toLowerCase();
        s[i] = str;
        flag = 1;
      }
    } else {
      flag = 1;
    }
  }
  return s.join(``);
}
