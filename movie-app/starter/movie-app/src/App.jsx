import Nav from "./Nav.jsx";
import { MainPage } from "./MainPage.jsx";
import { useState } from "react";

function App() {
  const [querry, setQuerry] = useState("");
  return (
    <>
      <Nav querry={querry} setQuerry={setQuerry} />
      <MainPage querry={querry} />
    </>
  );
}

export default App;
