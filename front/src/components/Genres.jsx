import { Link } from "react-router-dom";

export function Genres() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 py-10 pb-32 lg:px-52 md:px-20 text-center">
      <div className="bg-gray-100 shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link>
          <h2 className="text-xl font-semibold mb-7">Hombres</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-3xl h-96"
            src="https://i.pinimg.com/564x/06/7f/78/067f789c9e9738e6c6b9fd02c271f45b.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link>
          <h2 className="text-xl font-semibold mb-7">Mujeres</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-3xl h-96"
            src="https://i.pinimg.com/564x/d5/fc/5e/d5fc5ed9eb899521f62af9830038df53.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link>
          <h2 className="text-xl font-semibold mb-7">Niños</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-3xl h-96"
            src="https://i.pinimg.com/564x/79/a2/57/79a257fdbb3674f586f2bd01f9a40f23.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
