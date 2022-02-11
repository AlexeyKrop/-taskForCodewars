function getCount(str) {
  var vowelsCount = 0;
  let reg = /[a, e, i, o, u]/g;
  str = str.replace(/\s+/gi, "");
  let found = str.match(reg);
  if (found) {
    vowelsCount = found.length;
    return vowelsCount;
  } else {
    return 0;
  }
}
