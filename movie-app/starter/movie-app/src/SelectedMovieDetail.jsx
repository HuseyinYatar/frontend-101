import { useEffect, useState } from "react";

import StarRating from "./StarRating";
export function SelectedMovieDetail({
  removeSelectedMovieById,
  selectedMovieId,
  selectedMovies,
  setSelectedMovies,
}) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    const getMovieDetail = async () => {
      if (selectedMovieId === -1) return;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzk5MWJiYTBmOTA2ZGE1ZTI2YzFjZTIzM2FlODE1NiIsIm5iZiI6MTc3Mjk4MDg1NC42MTY5OTk5LCJzdWIiOiI2OWFkOGE3NjhjMTY3YmUxM2I0ZWFlOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cvgyNyPB0E859_tG-xeZjxPuyOrPnenlwDK7xC6yGUA",
        },
      };

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedMovieId}`,
        options,
      );
      const data = await res.json();
      setSelectedMovie(data);
    };

    if (selectedMovieId) {
      getMovieDetail();
    }
  }, [selectedMovieId]);

  function handleAddtoSelectedList(movie) {
    setSelectedMovies((selectedMovies) => [...selectedMovies, movie]);
  }
  function handleSetMovieRating(movie, rating) {
    movie.vote_average = rating;
  }

  const isAddedToList = selectedMovies
    .map((m) => m.id)
    .includes(selectedMovieId);
  if (selectedMovie == null) return;

  return (
    <>
      {selectedMovieId !== -1 && (
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
          </div>

          <div className="col-md-8">
            <div className="p-0 text-center h6">{selectedMovie.title}</div>
            <div className="d-flex align-items-center">
              <i className="bi bi-calendar2-date"></i>
              <span className="ms-2">{selectedMovie.release_date}</span>
            </div>
            <div>
              <i className="bi bi-star-fill text-warning "></i>
              <span className="ms-2 ">{selectedMovie.vote_average}</span>
            </div>
          </div>

          <div className="col-md-12">
            <p>{selectedMovie.overview}</p>
          </div>
          <div className="my-4">
            <StarRating
              MaxRating={10}
              handleSetMovieRating={handleSetMovieRating}
            />
          </div>
          <div className="col-md-12 justify-content-between d-flex">
            <button
              onClick={() => removeSelectedMovieById()}
              type="button"
              className="btn btn-danger"
            >
              close
            </button>
            {!isAddedToList && (
              <>
                <button
                  onClick={() => handleAddtoSelectedList(selectedMovie)}
                  type="button"
                  className="btn btn-primary"
                >
                  Add to List
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
