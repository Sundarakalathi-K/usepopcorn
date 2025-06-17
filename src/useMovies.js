import { useState, useEffect } from "react";

export function useMovies(query, callback) {
  const api_key = "caa39f0b";
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, SetError] = useState("");

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoader(true);
          SetError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${api_key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong while fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found !");
          setMovies(data.Search);
          SetError("");
          // console.log(data.Search);
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") SetError(err.message);
        } finally {
          setIsLoader(false);
        }
        // .then((res) => res.json())
        // .then((data) => setMovies(data.Search));
      }

      if (query.length < 3) {
        setMovies([]);
        SetError("");
        return;
      }

      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoader, error };
}
