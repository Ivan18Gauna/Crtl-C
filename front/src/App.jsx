import { Category } from "./components/Category";
import { Flyer } from "./components/Flyer";
import { Genres } from "./components/Genres";
import { Info } from "./components/Info";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Flyer />
      <Category />
      <Genres />
      <Info />
    </div>
  );
}

export default App;
