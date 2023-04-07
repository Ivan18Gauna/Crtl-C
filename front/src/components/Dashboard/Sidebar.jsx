import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="bg-blue-200 h-full overflow-y-scroll">
      <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
        <img
          className="w-20 h-20 object-cover rounded-full"
          src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=740&t=st=1680889645~exp=1680890245~hmac=fb1cda27cff626c1ced38691b032a9794ce9d8a800b3c6246dc5f2968bf44e6c"
          alt=""
        />
        <h1 className="text-xl text-white font-bold">La Joaqui</h1>
        <h3 className="bg-blue-400 rounded-full py-1 px-3 text-white">
          Re-Pro
        </h3>
      </div>
      <nav className="bg-blue-800 p-8 rounded-tr-[100px] h-[70vh]">
        <Link className='flex items-center gap-4 text-white hover:bg-blue-900 transition-colors py-2 px-4 rounded-xl'>
          <RiHome2Fill /> Home
        </Link>
      </nav>
    </div>
  );
}
