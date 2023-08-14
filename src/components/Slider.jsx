import React, { useState } from "react";
import "./Slider.css";

// left right arrow icons
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />

      {/* mapping images in fields  */}

      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            className={slide === idx ? "slide" : "slide slide-hidden "}
            alt={item.alt}
            key={idx}
          />
        );
      })}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />

      {/* Indicators icons */}
      <span className="indicators">
        {data.map((__, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
