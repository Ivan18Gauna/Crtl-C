export function Filters() {
    return (
        <div className="flex flex-row  w-full bg-gray-100">
        <select className="mx-auto my-2 w-full text-center">
          <option hidden option value="1">
            Categorias
          </option>
          <option value="2">Todas</option>
          <option value="3">Zapatillas</option>
          <option value="4">Pantalones</option>
          <option value="5">Remeras</option>
          <option value="6">Accesorios</option>
        </select>

        <select className="mx-auto my-2 w-full text-center">
          <option hidden option value="1">
            Generos
          </option>
          <option value="2">Hombre</option>
          <option value="3">Mujeres</option>
          <option value="4">Niños</option>
        </select>

       

        <select className="mx-auto my-2 w-full text-center">
          <option hidden option value="1">
            Filtro 4
          </option>
          <option value="2">Opción 2</option>
          <option value="3">Opción 3</option>
          <option value="4">Opción 4</option>
          <option value="5">Opción 5</option>
        </select>
      </div>
    )
}
