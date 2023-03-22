import { Link } from "react-router-dom";
import { category } from "./array";

export function Category() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 py-10 pb-22 lg:px-42 md:px-20 text-center">
      {category.map((el) => {
        return (
          <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
            <Link to="/products">
              <div>
                <h2 className="text-xl font-semibold mb-7">{el.categoria}</h2>
              </div>
              <div>
                <img
                  className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-60"
                  src={el.imagen}
                  alt=""
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
