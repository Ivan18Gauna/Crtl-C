import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handle(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function hadleSudmit(e) {
    e.preventDefault();
    dispatch(getName(name));
  }
  return (
    <div className="flex  flex-row text-center  justify-center">
      <input
        type="text"
        placeholder="Buscar producto..."
        className="py-2.5 px-5 rounded-xl"
        onChange={(e) => handle(e)}
      />
      <button
        onClick={(e) => hadleSudmit(e)}
        className="text-black border border-black py-2.5 px-5 rounded-md hover:bg-gray-300 hover:text-black hover:border-black transition duration-500 ease-in-out lg:mr-5 mb-4 lg:mb-0 flex justify-center items-center"
      >
        <BiSearchAlt />
      </button>
    </div>
  );
}
