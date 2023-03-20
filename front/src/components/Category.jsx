import { Link } from "react-router-dom";

export function Category() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 py-10 pb-22 lg:px-42 md:px-20 text-center">
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link to="/products">
          <h2 className="text-xl font-semibold mb-7">Camperas</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-60"
            src="https://i.pinimg.com/564x/3d/b8/0d/3db80d9e71620e4429ac43fcf19542f9.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link to="/products">
          <h2 className="text-xl font-semibold mb-7">Mochilas</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-60"
            src="https://i.pinimg.com/564x/e0/7f/fe/e07ffe8baad9c4172228ba682a10e626.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link to="/products">
          <h2 className="text-xl font-semibold mb-7">Zapatillas</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-60"
            src="https://i.pinimg.com/564x/b5/ca/4d/b5ca4db27711682a16f544e14a723932.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link to="/products">
          <h2 className="text-xl font-semibold mb-7">Pantalones</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-60"
            src="https://i.pinimg.com/564x/1e/55/79/1e55792d6d4f2224e7373b77a0e2e07b.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
        <Link to="/products">
          <h2 className="text-xl font-semibold mb-7">Accesorios</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl h-60"
            src="https://i.pinimg.com/564x/d6/e7/63/d6e7638c0d0b92166f2b9c828538f34d.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
