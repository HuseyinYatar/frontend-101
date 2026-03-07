function SelectedMovie({ movie }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
          <img src={movie.Poster} className="img-fluid rounded-start" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.Title}</h6>
            <i className="bi bi-star-fill text-warning"></i>
            <span className="ms-2">{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectedMovie;
