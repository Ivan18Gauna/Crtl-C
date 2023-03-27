import { useDispatch, useSelector } from "react-redux";

export function Filters() {
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    dispatch()
  };
  return (
    <div className="flex flex-row  w-full border">
      <select
        className="mx-auto my-2 w-full text-center border"
        onChange={(e) => {
          handle(e);
        }}
      >
        <option hidden option value="1">
          Categorias
        </option>
        <option value="Todas">Todas</option>
        <option value="Zapatillas">Zapatillas</option>
        <option value="Pantalones">Pantalones</option>
        <option value="Remeras">Remeras</option>
        <option value="Accesorios">Accesorios</option>
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
  );
}
