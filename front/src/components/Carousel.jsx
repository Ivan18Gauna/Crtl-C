import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./tailwind.css";

const images = [
  {
    id: 1,
    src:
      "https://thumbs.dreamstime.com/b/marcas-de-ropa-deportiva-conjunto-logotipos-m%C3%A1s-populares-adidas-new-balance-nike-puma-equipos-deportivos-y-compa%C3%B1%C3%ADas-222305547.jpg",
  },
  {
    id: 2,
    src:
      "https://www.shutterstock.com/image-vector/sportswear-logos-nike-adidas-puma-260nw-2168877073.jpg",
  },
  {
    id: 3,
    src:
      "https://thumbs.dreamstime.com/b/nike-adidas-fila-reebok-puma-logotipos-de-equipos-deportivos-y-empresa-ropa-deportiva-kiev-ucrania-octubre-new-balance-199945490.jpg",
  },
  {
    id: 4,
    src:
      "https://thumbs.dreamstime.com/b/adidas-nike-reebok-asics-jordan-puma-under-armor-fila-columbia-skechers-converse-logos-de-equipos-deportivos-y-equipo-deportivo-215740587.jpg",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextClick, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider py-4">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image) => (
          <img key={image.id} className="slide px-10" src={image.src} alt="" />
        ))}
      </div>

      {currentSlide > 0 && (
        <div className="arrow left-0 ml-4" onClick={handlePrevClick}>
          <AiOutlineArrowLeft />
        </div>
      )}

      {currentSlide < images.length - 1 && (
        <div className="arrow right-0 mr-4" onClick={handleNextClick}>
          <AiOutlineArrowRight />
        </div>
      )}
    </div>
  );
}
