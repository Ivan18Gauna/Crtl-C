import { Category } from "./components/Category";
import { Genres } from "./components/Genres";
import { Info } from "./components/Info";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <NavBar />
      <Carousel/>
      <Category />
      <Genres />
      <Info />
    </div>
  );
}

export default App;
