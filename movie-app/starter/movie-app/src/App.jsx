import { useState } from "react";
import { movie_list } from "./data.js";

const selected_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    rating: 8.4,
    duration: 120.0,
  },

  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    rating: 7.1,
    duration: 140.0,
  },
];

const getAverge = (array) =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setselectedMovies] = useState(selected_list);
  const [isOpen, setIsOpen] = useState(true);

  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-primary text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">Movie App</div>
            <div className="col-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-4 text-end">
              <strong>5</strong> eleman se�ildi
            </div>
          </div>
        </div>
      </nav>

      <main className="container ">
        <div className="row ">
          <div className="col-md-9  ">
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
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
                  {movie_list.map((movie) => (
                    <div className="card" key={movie.Id}>
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="card-body">
                        <h6>{movie.Title}</h6>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-calendar2-date"></i>
                          <span className="ms-2">{movie.Year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-md-3  ">
            <div className="selected-move-list">
              {selectedMovies.map((selected_movie, index) => (
                <div className="card mb-2" key={index}>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={selected_movie.Poster}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h6 className="card-title">{selected_movie.Title}</h6>
                        <i className="bi bi-star-fill text-warning"></i>
                        <span className="ms-2">{selected_movie.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card md-2">
              <div className="card-body">
                <h5>{selectedMovies.length} movies added to List</h5>
                <div className="d-flex gap-3">
                  <p className="">
                    <i className="bi bi-star-fill text-warning "></i>
                    <span className="ms-2 ">
                      {getAverge(selectedMovies.map((m) => m.rating))}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-clock-fill "></i>
                    <span className="ms-2">
                      {getAverge(selectedMovies.map((m) => m.duration))}minutes
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
