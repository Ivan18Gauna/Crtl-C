import { Link } from "react-router-dom";

export function Product() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-12 place-items-center h-screen px-20 gap-12">
      {/* <div className="flex flex-col md:flex-row md:space-x-4 py-10 pb-22 lg:px-42 md:px-20 text-center"> */}
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full">
        <Link>
          <h2 className="text-xl font-semibold mb-7 flex justify-center items-center">Camperas</h2>
          <img
            className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl"
            src="https://th.bing.com/th/id/R.3e40f90f3210efe682c9619a89c7c4e2?rik=CCyra%2bvdmDc1tA&pid=ImgRaw&r=0"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full">
        <h2 className="text-xl font-semibold mb-7 flex justify-center items-center">Mochilas</h2>
        <img
          className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl"
          src="https://th.bing.com/th/id/R.3e40f90f3210efe682c9619a89c7c4e2?rik=CCyra%2bvdmDc1tA&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full">
        <h2 className="text-xl font-semibold mb-7 flex justify-center items-center">Zapatillas</h2>
        <img
          className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl"
          src="https://th.bing.com/th/id/R.3e40f90f3210efe682c9619a89c7c4e2?rik=CCyra%2bvdmDc1tA&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full">
        <h2 className="text-xl font-semibold mb-7 flex justify-center items-center">Pantalones</h2>
        <img
          className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl"
          src="https://th.bing.com/th/id/R.3e40f90f3210efe682c9619a89c7c4e2?rik=CCyra%2bvdmDc1tA&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
      <div className="bg-gray-100 rounded-lg shadow-2xl p-4 w-full">
        <h2 className="text-xl font-semibold mb-7 flex justify-center items-center">Accesorios</h2>
        <img
          className="hover:transform hover:scale-110 transition duration-300 ease-in-out rounded-2xl"
          src="https://th.bing.com/th/id/R.3e40f90f3210efe682c9619a89c7c4e2?rik=CCyra%2bvdmDc1tA&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
    </div>
  );
}
