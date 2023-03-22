import { Link } from "react-router-dom";
import { products } from "./array";

export function Product() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-12 place-items-center px-10 gap-12 pb-36 ">
      {products.map((el) => {
        return (
          <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full h-full flex justify-center items-center">
            <Link>
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
                  <div>
                    {
                      el.stock? 'Disponible': 'Sin Stock'
                    }
                  </div>
                </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
