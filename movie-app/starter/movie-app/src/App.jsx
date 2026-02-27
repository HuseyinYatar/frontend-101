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
  },
];

function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setselectedMovies] = useState(selected_list);

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
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
