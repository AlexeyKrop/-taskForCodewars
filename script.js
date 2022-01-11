function rpsls(pl1, pl2) {
  let win = "Draw!";
  let arr = [
    "scissors cuts paper",
    "paper covers rock",
    "rock crushes lizard",
    "lizard poisons spock",
    "spock smashes scissors",
    "scissors decapitates lizard",
    "lizard eats paper",
    "paper disproves spock",
    "spock vaporizes rock",
    "rock crushes scissors",
  ].map((v) => v.split` `);
  arr.map((v) =>
    v[0] === pl1 && v[2] === pl2
      ? (win = "Player 1")
      : v[0] === pl2 && v[2] === pl1
      ? (win = "Player 2")
      : v
  );
  return win !== "Draw!" ? `${win} Won!` : win;
}
