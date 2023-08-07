import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imageslide1 from "../assets/images/slider-img/1.jpg";
import imageslide2 from "../assets/images/slider-img/2.jpg";
import imageslide3 from "../assets/images//slider-img/3.jpg";
import imageslide4 from "../assets/images//slider-img/4.jpg";
import imageslide5 from "../assets/images//slider-img/5.jpg";

function Carouselstart() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel-img"
          src={imageslide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-img"
          src={imageslide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={imageslide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={imageslide4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={imageslide5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselstart;
