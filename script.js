function isIsogram(str) {
  let strArr = str.toLowerCase();
  for (let i = 0; i < strArr.length; ++i) {
    for (let j = i + 1; j < strArr.length; ++j) {
      if (strArr[i] === strArr[j]) {
        return false;
      }
    }
  }
  return true;
}
isIsogram("moo");
