import React, { useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ImageSection({ images }) {
  const [img, setImg] = useState(images[0]);

  const changeImage = (index) => {
    setImg(images[index]);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-5 border bg-white p-3 ">
        {images?.map((val, key) => (
          <div
            onClick={() => changeImage(key)}
            key={key}
            className={img == images[key] ? "border border-dark" : null}
          >
            <img
              className="img-fluid"
              src={val}
              alt={`images${key}`}
              style={{ height: "100px" }}
            />
          </div>
        ))}
      </div>
      <div className="container w-75">
        <img
          src={img}
          alt=""
          className="img-fluid mb-2  img-fluid object-fit-contain"
          style={{ height: "390px" }}
        />
      </div>
    </>
  );
}
