function countSalutes(hallway) {
  let met = 0;
  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === ">") {
      for (let j = i + 1; j < hallway.length; j++) {
        if (hallway[j] === "<") {
          met += 1;
        }
      }
    }
  }
  return met * 2;
}
