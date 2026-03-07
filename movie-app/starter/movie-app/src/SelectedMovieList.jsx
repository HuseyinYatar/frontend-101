import { useState } from "react";
import SelectedMovie from "./SelectedMovie";
import { SelectedMovieInfo } from "./SelectedMovieInfo";
import { selected_list } from "./data.js";
export default function SelectedMovieList() {
  const [selectedMovies, setselectedMovies] = useState(selected_list);

  return (
    <>
      <div className="selected-move-list">
        {selectedMovies.map((movie, index) => (
          <SelectedMovie movie={movie} key={movie.Id} />
        ))}
      </div>
      <SelectedMovieInfo selectedMovies={selectedMovies} />
    </>
  );
}
