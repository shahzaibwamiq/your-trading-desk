import Currencysec from "../components/Currencysec";
import Testimonial from "../components/Testimonial";
import React from "react";

function Market() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <h1>Market</h1>
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <i className="fas fa-caret-right"></i>
            </li>
            <li>
              <span>Market</span>
            </li>
          </ul>
        </div>
      </section>
    <Currencysec/>
    <Testimonial/>
    </>
  );
}

export default Market;
