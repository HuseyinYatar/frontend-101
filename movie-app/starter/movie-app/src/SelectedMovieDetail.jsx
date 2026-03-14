import StarRating from "./StarRating";
import { useState, useEffect } from "react";
export function SelectedMovieDetail({
  removeSelectedMovieById,
  selectedMovieId,
  selectedMovies,
  setSelectedMovies,
}) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. Create the controller inside the effect
    const controller = new AbortController();

    async function getMovieDetail() {
      // If no movie is selected, don't fetch
      if (selectedMovieId === -1) return;

      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovieId}`,
          {
            method: "GET",
            signal: controller.signal, // Attach the signal
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzk5MWJiYTBmOTA2ZGE1ZTI2YzFjZTIzM2FlODE1NiIsIm5iZiI6MTc3Mjk4MDg1NC42MTY5OTk5LCJzdWIiOiI2OWFkOGE3NjhjMTY3YmUxM2I0ZWFlOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cvgyNyPB0E859_tG-xeZjxPuyOrPnenlwDK7xC6yGUA   ",
            },
          },
        );

        if (!res.ok) throw new Error("Failed to fetch movie details");

        const data = await res.json();
        setSelectedMovie(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted for ID:", selectedMovieId);
        } else {
          console.error(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetail();

    // 2. Cleanup function: Aborts the fetch if component re-renders or unmounts
    return () => {
      controller.abort();
    };
  }, [selectedMovieId]);

  // 3. Fix: Update state properly instead of mutating props
  function handleAddtoSelectedList() {
    setSelectedMovies((curr) => [...curr, selectedMovie]);
  }

  function handleSetMovieRating(rating) {
    // Update the local state so the star rating reflected in the UI
    setSelectedMovie((prev) => ({ ...prev, userRating: rating }));
  }

  // Check if movie is already in the list
  const isAddedToList = selectedMovies.some((m) => m.id === selectedMovieId);

  // Early return if no movie is selected or data hasn't arrived yet
  if (selectedMovieId === -1) return null;
  if (isLoading) return <div className="text-center p-5">Loading...</div>;
  if (!selectedMovie) return null;

  return (
    <div className="row d-flex justify-content-between p-3 border rounded shadow-sm bg-light">
      <div className="col-md-4">
        <img
          className="img-fluid rounded"
          src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />
      </div>

      <div className="col-md-8">
        <h5 className="text-center mb-3">{selectedMovie.title}</h5>
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-calendar2-date"></i>
          <span className="ms-2">{selectedMovie.release_date}</span>
        </div>
        <div className="mb-2">
          <i className="bi bi-star-fill text-warning"></i>
          <span className="ms-2">
            {selectedMovie.vote_average.toFixed(1)} TMDB Rating
          </span>
        </div>
      </div>

      <div className="col-md-12 mt-3">
        <p className="small text-muted">{selectedMovie.overview}</p>
      </div>

      <div className="col-md-12 text-center my-3">
        <StarRating
          MaxRating={10}
          size={24}
          onSetRating={handleSetMovieRating}
        />
      </div>

      <div className="col-md-12 d-flex justify-content-between">
        <button
          onClick={removeSelectedMovieById}
          type="button"
          className="btn btn-sm btn-outline-danger"
        >
          Close
        </button>

        {!isAddedToList && (
          <button
            onClick={handleAddtoSelectedList}
            type="button"
            className="btn btn-sm btn-primary"
          >
            + Add to List
          </button>
        )}
      </div>
    </div>
  );
}
