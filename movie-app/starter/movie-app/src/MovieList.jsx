import { useState } from "react";
import { Movie } from "./Movie.jsx";

function MovieList({ movies }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={handleSetIsOpen}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && (
        <div className="movie-list">
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.Id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieList;
