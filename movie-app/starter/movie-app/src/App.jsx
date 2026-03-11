import Nav from "./Nav.jsx";
import { MainPage } from "./MainPage.jsx";
import { useState } from "react";

function App() {
  const [querry, setQuerry] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);

  return (
    <>
      <Nav
        querry={querry}
        setQuerry={setQuerry}
        selectedMovies={selectedMovies}
      />
      <MainPage
        querry={querry}
        selectedMovies={selectedMovies}
        setSelectedMovies={setSelectedMovies}
      />
    </>
  );
}

export default App;
