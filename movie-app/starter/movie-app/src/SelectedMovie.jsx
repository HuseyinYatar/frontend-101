function SelectedMovie({ movie, removeFromSelectedMovieListById }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <i className="bi bi-star-fill text-warning"></i>
            <span className="ms-2">{movie.vote_average}</span>
            <p>
              <i className="bi bi-clock-fill "></i>
              <span className="ms-2">
                {movie.runtime}
                minutes
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-12 justify-content-between d-flex">
          <button
            onClick={() => removeFromSelectedMovieListById(movie.id)}
            type="button"
            className="btn btn-danger"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default SelectedMovie;
