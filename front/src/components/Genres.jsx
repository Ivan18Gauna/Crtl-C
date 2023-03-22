import { Link } from "react-router-dom";
import {products} from './array'

export function Genres() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 py-10 pb-32 lg:px-52 md:px-20 text-center">
      <div className="bg-gray-100 shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link>
          <h2 className="text-xl font-semibold mb-7">Hombres</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-3xl h-96"
            src={products[30].imagen}
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link>
          <h2 className="text-xl font-semibold mb-7">Mujeres</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-3xl h-96"
            src={products[31].imagen}
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link>
          <h2 className="text-xl font-semibold mb-7">Niños</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-3xl h-96"
            src="https://th.bing.com/th/id/R.863223fac8c4412b2cf64ce1f5ebe6cd?rik=O8NDLqFR7syetQ&pid=ImgRaw&r=0"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
