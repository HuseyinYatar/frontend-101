import { useState } from "react";
import { getAverage } from "./utils/averge";
export function SelectedMoviesInfo({ selectedMovies }) {
  if (selectedMovies.length == 0) return;
  const vote_avg = getAverage(selectedMovies.map((m) => m.vote_average));
  const time_avg = getAverage(selectedMovies.map((m) => m.runtime));
  return (
    <div className="card md-2">
      <div className="card-body">
        <h5>{selectedMovies.length} movies added to List</h5>
        <div className="d-flex gap-3">
          <p className="">
            <i className="bi bi-star-fill text-warning "></i>
            <span className="ms-2 ">{vote_avg.toFixed(2)}</span>
          </p>
          <p>
            <i className="bi bi-clock-fill "></i>
            <span className="ms-2">
              {time_avg.toFixed(2)}
              minutes
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
