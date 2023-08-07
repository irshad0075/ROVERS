import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel"; // Import the Carousel component
import "../styles/ProductSlider.css";
// import banner from "../assets/images/mercedes-offer.png";
import imageslide1 from "../assets/images/slider-img/cat1.jpg";
import imageslide2 from "../assets/images/slider-img/cat2.jpg";
import imageslide3 from "../assets/images/slider-img/cat3.jpg";
import imageslide4 from "../assets/images/slider-img/2.jpg";
import imageslide5 from "../assets/images/slider-img/5.jpg";

// CustomPrevArrow component
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow left-arrow" />
    </div>
  );
};

// CustomNextArrow component
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow right-arrow" />
    </div>
  );
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((json) => setProducts(json.data.products));
  }, [categoryName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
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

      <div className="container">
        {/* <div className="image">
          <img src={banner} alt="Banner" />
        </div> */}
        <div className="my-6 text-center" style={{ color: " #000f59" }}>
          <h1>{categoryName.toUpperCase()}</h1>
        </div>

        <Slider {...sliderSettings} className="product-slider">
          {products.map((val, key) => (
            <div className="product-card-container" key={key}>
              <Link
                className="text-decoration-none text-white"
                to={`/products/${val.id}`}
              >
                <Card
                  className="product-card text-white custom-card"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="ribbon-wrapper">
                    <div
                      className="card-ribbon"
                      style={{ backgroundColor: " #000f59" }}
                    >
                      ₹ {val.price}
                    </div>
                  </div>
                  <Card.Img variant="top" src={val.thumbnail} />
                  <Card.Body
                    className="d-flex flex-column align-items-center justify-content-between h-100"
                    style={{ color: " black" }}
                  >
                    <div className="text-center">
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>{val.description}</Card.Text>
                    </div>
                    <div>
                      <button
                        className="btn btn-dark"
                        style={{ backgroundColor: " #000f59" }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                        Add to Cart
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
