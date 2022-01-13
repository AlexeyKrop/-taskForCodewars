const babySharkLyrics = () => {
  const fish = [
    "Baby shark",
    "Mommy shark",
    "Daddy shark",
    "Grandma shark",
    "Grandpa shark",
    "Let's go hunt",
  ];
  let lyrics = "";
  let s = " doo".repeat(6);
  fish.map((f) => {
    lyrics += `${f},${s}\n`.repeat(3) + `${f}!\n`;
  });
  lyrics += "Run away,…";
  return lyrics;
};
