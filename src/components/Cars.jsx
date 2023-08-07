import React from 'react'
import '../styles/Cars.css'
function Cars() {
  return (
    <>
        
        <section
        className="product-carousel"
        style={{ backgroundColor: "white" }}
      >
        <div className="sale-container">
          <img src={sale} alt="sale" className="sale-image" />
        </div>
      </section>

    </>
  )
}

export default Cars