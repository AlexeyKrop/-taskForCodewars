function pillars(num_pill, dist, width) {
  if (num_pill > 1) {
    return (num_pill - 1) * dist * 100 + width * (num_pill - 2);
  } else {
    return 0;
  }
}
