import { useState } from "react";
import SelectedMovie from "./SelectedMovie";
import { SelectedMoviesInfo } from "./SelectedMoviesInfo.jsx";
import { SelectedMovieDetail } from "./SelectedMovieDetail.jsx";
export default function SelectedMovieList({
  selectedMovieId,
  removeSelectedMovieById,
  setSelectedMovies,
  selectedMovies,
}) {
  function removeFromSelectedMovieListById(id) {
    setSelectedMovies(selectedMovies.filter((m) => m.id !== id));
  }
  return (
    <>
      <div className="selected-move-list">
        {selectedMovies.map((movie, index) => (
          <SelectedMovie
            movie={movie}
            key={movie.id}
            removeFromSelectedMovieListById={removeFromSelectedMovieListById}
          />
        ))}
      </div>
      <SelectedMoviesInfo selectedMovies={selectedMovies} />
      <SelectedMovieDetail
        removeSelectedMovieById={removeSelectedMovieById}
        selectedMovieId={selectedMovieId}
        selectedMovies={selectedMovies}
        setSelectedMovies={setSelectedMovies}
      />
    </>
  );
}
