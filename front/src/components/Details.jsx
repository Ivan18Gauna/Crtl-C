import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { forId } from "../redux/actions";
import {NavBar} from './NavBar'

export default function Details() {
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // const solo = useSelector((state) => state.id);

  // useEffect(() => {
  //   dispatch(forId(id));
  // }, [dispatch]);

  const probando = [
    {
      nombre: "Pantalón con detalle en cintura",
      imagen:
        "https://jbonita.vteximg.com.br/arquivos/ids/216044-1280-1707/E7884128_1.jpg?v=637986065147000000",
      precio: 10000,
      categoria: "Pantalon",
      stock: true,
    },
  ];

  return <div>
    <NavBar/>
    <div className=" flex flex-row justify-center items-center pt-10">
      <div>
      <h1>{probando[0].nombre}</h1>
      <span>{probando[0].precio}</span>
      <span>{probando[0].categoria}</span>
      </div>
      <div className="w-72">
      <img src={probando[0].imagen} alt="" className="rounded-3xl"/>
      </div>
    </div>
  </div>;
}
