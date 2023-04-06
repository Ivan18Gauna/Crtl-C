import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { forId } from "../redux/actions";
import CarouselProducts from "./CarouselProducts";
import { NavBar } from "./NavBar";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const oneProduct = useSelector((state) => state.id);
  console.log(oneProduct);
  useEffect(() => {
    dispatch(forId(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-row justify-center items-center py-12">
        <div>
          <div className="py-10">
            <h1>{oneProduct.nombre}</h1>
          </div>
          <div className="flex justify-between">
            <span>{oneProduct.precio}</span>
            <span>{oneProduct.categoria}</span>
          </div>
        </div>
        <div className="w-72">
          <img src={oneProduct.imagen} alt="" className="rounded-3xl" />
        </div>
      </div>
      <CarouselProducts />
    </div>
  );
}
