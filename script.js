const isPrime = (n) => {
  if (n > 0) {
    if (n === 1 || n === 0) {
      return false;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  } else {
    return false;
  }
};
