import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/cardStyle.css";
export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center text-dark">
        <h1>Categories</h1>
        <p className="text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto
          deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro
          nisi saepe autem?
        </p>
      </div>

      <div className="row ">
        {categories.map((val, key) => (
          <div className="col-md-4 my-4 " key={key}>
            <Link
              className="text-decoration-none"
              to={`/products/category/${val}`}
            >
              <Card className="h-100 text-danger">
                <Card.Body>
                  <Card.Title>
                    {key + 1} - {val.toUpperCase().replace("-", " ")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
