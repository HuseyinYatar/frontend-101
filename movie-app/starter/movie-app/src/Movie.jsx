import "./index.css";

export function Movie({
  movie,
  handleSelectedMovieById,
  removeSelectedMovieById,
  selectedMovieId,
}) {
  const isSelected = selectedMovieId === movie.id;
  return (
    <div
      // className={`card g-3 movie ${true ? "selected-movie " : ""}`}
      className={`card g-3 movie ${isSelected ? "selected" : ""}`}
      onClick={() => handleSelectedMovieById(movie.id)}
    >
      <img
        className="pt-3"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="card-body">
        <div className="row">
          <h6>{movie.title}</h6>
        </div>
        <div className="row">
          <div className="d-flex align-items-center">
            <i className="bi bi-calendar2-date"></i>
            <span className="ms-2">{movie.release_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
