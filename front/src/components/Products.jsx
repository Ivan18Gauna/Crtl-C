import { Filters } from "./Filters";
import { Genres } from "./Genres";
import { Info } from "./Info";
import { NavBar } from "./NavBar";
import { Product } from "./Product";

export function Products() {
  return (
    <div>
      <NavBar />
      <Filters />
      <Product/>
      <Info />
    </div>
  );
}
