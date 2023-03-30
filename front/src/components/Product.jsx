import { Link, useParams } from "react-router-dom";
import { products } from "./array";
import { allProducts, productsbycategory } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function Product() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [path, setPath] = useState(category);

  useEffect(() => {
    dispatch(allProducts());
    dispatch(productsbycategory(path));
  }, [dispatch, path]);

  const hadlePath = (e) => {
    e.preventDefault();
    setPath(e.target.value);
  };

  const filterCategory = useSelector((state) => state.category);
  return (
    <div>
      <div className="flex flex-row  w-full border">
        <select
          onChange={(e) => hadlePath(e)}
          className="mx-auto my-2 w-full text-center border"
        >
          <option hidden option value="1">
            Categorias
          </option>
          <option value="Zapatillas">Zapatillas</option>
          <option value="Pantalon">Pantalones</option>
          <option value="Remera">Remeras</option>
          <option value="Accesorio">Accesorios</option>
        </select>

        <select className="mx-auto my-2 w-full text-center border">
          <option hidden option value="1">
            Generos
          </option>
          <option value="2">Hombre</option>
          <option value="3">Mujeres</option>
          <option value="4">Niños</option>
        </select>

        <select className="mx-auto my-2 w-full text-center border">
          <option hidden option value="1">
            Filtro 4
          </option>
          <option value="2">Opción 2</option>
          <option value="3">Opción 3</option>
          <option value="4">Opción 4</option>
          <option value="5">Opción 5</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-12 place-items-center px-10 gap-12 pb-36 ">
        {filterCategory.map((el) => {
          return (
            <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full h-full flex justify-center items-center">
            <Link to={"/details/" +el.nombre}>
                <h2 className="text-xl font-semibold mb-7 flex justify-center items-center">
                  {el.nombre}
                </h2>
                <img
                  className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-96 object-cover"
                  src={el.imagen}
                  alt=""
                />
                <div className="flex justify-between pt-6">
                  <div>${el.precio}</div>
                  <div>{el.stock ? "Disponible" : "Sin Stock"}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
