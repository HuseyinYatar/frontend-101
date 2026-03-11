import SelectedMovieList from "./SelectedMovieList.jsx";
import { MovieListContainer } from "./MovieListContainer.jsx";
import { useState } from "react";

export function MainPage({ querry, selectedMovies, setSelectedMovies }) {
  const [selectedMovieId, setSelectedMovieById] = useState(-1);

  function handleSelectedMovieById(id) {
    setSelectedMovieById(id == selectedMovieId ? -1 : id);
  }
  function removeSelectedMovieById() {
    setSelectedMovieById(-1);
  }
  return (
    <main className="container ">
      <div className="row ">
        <div className="col-md-9">
          <MovieListContainer
            querry={querry}
            handleSelectedMovieById={handleSelectedMovieById}
            removeSelectedMovieById={removeSelectedMovieById}
            selectedMovieId={selectedMovieId}
          />
        </div>
        <div className="col-md-3  ">
          <SelectedMovieList
            selectedMovieId={selectedMovieId}
            removeSelectedMovieById={removeSelectedMovieById}
            selectedMovies={selectedMovies}
            setSelectedMovies={setSelectedMovies}
          />
        </div>
      </div>
    </main>
  );
}
