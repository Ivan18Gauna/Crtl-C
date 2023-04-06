import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { forId, productsbycategory } from "../redux/actions";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function CarouselProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  console.log(index, "index");
  const oneProduct = useSelector((state) => state.id);
  const filterCategory = useSelector((state) => state.category);
  console.log(filterCategory.length - 4, "filterCategory");

  const slice = filterCategory.slice(index, index + 4);

  const next = () => {
    if (index !== filterCategory.length - 4) {
      setIndex(index + 1);
    }
  };
  const previus = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    dispatch(forId(id));
    dispatch(productsbycategory(oneProduct.categoria));
  }, [dispatch, id, filterCategory]);

  return (
    <div>
      <div className="flex flex-row justify-center items-center pb-20">
        {slice &&
          slice.map((el) => {
            return (
              <div className="flex flex-col justify-center items-center px-10 w-64">
                <div>
                  <img src={el.imagen} alt="" className="w-32" />
                </div>
                <div>
                  <h1 className="bottom-0">{el.nombre}</h1>
                </div>
              </div>
            );
          })}
        <button className="arrowx left-0 ml-10" onClick={previus}>
          <AiOutlineArrowLeft />
        </button>
        <button className="arrowx right-0 mr-10" onClick={next}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
