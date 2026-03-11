import { useState } from "react";
import { Search } from "./Search";
export default function Nav({ querry, setQuerry, selectedMovies }) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">Movie App</div>
          <Search querry={querry} setQuerry={setQuerry} />
          <div className="col-4 text-end">
            <strong>{selectedMovies.length}</strong> selected
          </div>
        </div>
      </div>
    </nav>
  );
}
