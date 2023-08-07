import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/PromotionCards.css";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/images/promotion/banner1.jpg";
import slide2 from "../assets/images/promotion/banner2.jpg";
import slide3 from "../assets/images/promotion/banner3.jpg";
import slide4 from "../assets/images/promotion/banner4.jpg";
import slide5 from "../assets/images/promotion/banner5.jpg";
import slide6 from "../assets/images/promotion/banner6.jpg";
import slide7 from "../assets/images/promotion/banner1.jpg";

const CategorySection = ({ categories }) => {
  return (
    <div className="categories-container "style={{ color: "#e1997e" }}>
      <div className="categories-scroll">
        {categories.map((val, key) => (
          <div className="category-item" key={key}>
            <Link
              className="text-decoration-none"
              to={`/products/category/${val}`}
            >
              <Card className="h-100 text-dark" >
                <Card.Body>
                  <Card.Title>{val.toUpperCase().replace("-", " ")}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        <Carousel.Item interval={1000}>
          <img className="carousel-image" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="carousel-image" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slide4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slide5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slide6} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slide7} alt="Seventh slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {/* <div className="my-5 text-center text-dark">
        <h1>Categories</h1>
      </div> */}

      <div className="d-flex justify-content-between">
        <CategorySection categories={categories} />
        <CarouselSection />
      </div>
    </div>
  );
}
