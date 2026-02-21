import { useEffect, useState } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("/movie.json");
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setMovies(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return { movies, loading, error };
}
