export function sortMovies(movies, sortBy) {
  const arr = [...movies];
  if (sortBy === "year") {
    arr.sort((a, b) => (b.releasing_year ?? 0) - (a.releasing_year ?? 0));
  }
  return arr;
}
