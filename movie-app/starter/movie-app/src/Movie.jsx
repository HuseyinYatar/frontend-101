export function Movie({ movie }) {
  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="card-body">
        <h6>{movie.Title}</h6>
        <div className="d-flex align-items-center">
          <i className="bi bi-calendar2-date"></i>
          <span className="ms-2">{movie.Year}</span>
        </div>
      </div>
    </div>
  );
}
