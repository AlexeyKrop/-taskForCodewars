function points(games) {
  return games.reduce((previousValue, currentValue) => {
    if (+currentValue[0] > +currentValue[2]) {
      return (previousValue += 3);
    } else if (currentValue[0] === currentValue[2]) {
      return (previousValue += 1);
    } else {
      return (previousValue += 0);
    }
  }, 0);
}
points(["1:0", "2:0", "3:0"]);
