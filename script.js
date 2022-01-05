function turn(c, t) {
  if (c === "N" && t === "W") return "left";
  if (c === "W" && t === "S") return "left";
  if (c === "S" && t === "E") return "left";
  if (c === "E" && t === "N") return "left";
  return "right";
}
