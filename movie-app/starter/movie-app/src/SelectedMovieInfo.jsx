import { useState } from "react";
import { getAverage } from "./utils/averge";
export function SelectedMovieInfo({ selectedMovies }) {
  return (
    <div className="card md-2">
      <div className="card-body">
        <h5>{selectedMovies.length} movies added to List</h5>
        <div className="d-flex gap-3">
          <p className="">
            <i className="bi bi-star-fill text-warning "></i>
            <span className="ms-2 ">
              {getAverage(selectedMovies.map((m) => m.rating))}
            </span>
          </p>
          <p>
            <i className="bi bi-clock-fill "></i>
            <span className="ms-2">
              {getAverage(selectedMovies.map((m) => m.duration))}minutes
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
