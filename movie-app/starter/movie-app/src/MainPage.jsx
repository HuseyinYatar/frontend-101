import SelectedMovieList from "./SelectedMovieList.jsx";
import { MovieListContainer } from "./MovieListContainer.jsx";
import { useState } from "react";

export function MainPage({ querry }) {
  const [loading, setLoading] = useState(true);

  return (
    <main className="container ">
      <div className="row ">
        <div className="col-md-9">
          <MovieListContainer querry={querry} />
        </div>
        <div className="col-md-3  ">
          <SelectedMovieList />
        </div>
      </div>
    </main>
  );
}
