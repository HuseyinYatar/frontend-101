import Nav from "./Nav.jsx";
import MovieList from "./MovileList.jsx";
import SelectedMovieList from "./SelectedMovieList.jsx";
function Main() {
  return (
    <main className="container ">
      <div className="row ">
        <MovieList />
        <div className="col-md-3  ">
          <SelectedMovieList />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

export default App;
