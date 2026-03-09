import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { Loading } from "./Loading";
import { Error } from "./Error";

export function MovieListContainer({ querry }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = "ac991bba0f906da5e26c1ce233ae8156";
  useEffect(
    function () {
      console.log(querry);
      // 1. All logic goes inside the effect's function
      const getMovieList = async () => {
        try {
          setLoading(true);
          setError(""); // Clear previous errors

          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${querry}`,
          );

          if (!response.ok) throw new Error("An undefined error occurred");

          const data = await response.json();

          if (data.results.length === 0) throw new Error("No record Found...");

          setMovies(data.results);
        } catch (err) {
          // 2. Catch the error and update the error state
          setError(err.message);
        } finally {
          // 3. Turn off loading regardless of success or failure
          setLoading(false);
        }
      };

      getMovieList();
    },
    [querry],
  );

  return (
    <div>
      {error && <Error error={error} />}
      {!error && (loading ? <Loading /> : <MovieList movies={movies} />)}
    </div>
  );
}
