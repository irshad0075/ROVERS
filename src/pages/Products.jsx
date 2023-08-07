import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/AllProductsPage.css";
import banner from "../assets/images/pro.png";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        categorizeProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const categorizeProducts = (products) => {
    const categorized = {};

    products.forEach((product) => {
      if (categorized.hasOwnProperty(product.category)) {
        categorized[product.category].push(product);
      } else {
        categorized[product.category] = [product];
      }
    });

    setCategorizedProducts(categorized);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    
    <div className="products-container">
      
      <div className="image">
        <img src={banner} alt="Banner" />
      </div>
      <h1 className="title">
        {selectedCategory === "" ? "SELECT A CATEGORY TO VIEW PRODUCTS" : selectedCategory.toUpperCase()}
      </h1>
      <div className="categories">
        <button className={`category ${selectedCategory === "" ? "active" : ""}`} onClick={() => handleCategoryClick("")}>
          All
        </button>
        {Object.keys(categorizedProducts).map((category) => (
          <button
            key={category}
            className={`category ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="product-list">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <>
            {selectedCategory === "" && <p className="select-category-text">Please select a category to view products.</p>}
            {categorizedProducts[selectedCategory]?.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="product-link">
                <Card className="product-card ">
                  <div className="ribbon">
                    ₹ {product.price}
                  </div>
                  <Card.Img src={product.thumbnail} className="product-image" />
                  <Card.Body>
                    <Card.Title className="product-title">{product.title}</Card.Title>
                    <div className="add-to-cart-btn-container">
                      <button className="add-to-cart-btn">
                        <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
