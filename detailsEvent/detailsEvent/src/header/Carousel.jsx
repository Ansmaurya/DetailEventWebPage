import React from "react";
import "./header.css";
import carousel1 from "./carousel1.jpg";
import carousel2 from "./carousel2.jpg";
import carousel3 from "./carousel3.jpg";
import carousel4 from "./carousel4.jpg";

function Carousel() {
  return (
    // <div className="cursol">
    //   <img src={carousel1} alt="" />
    // </div>
  
    <div id="carouselExampleIndicators"
      class="carousel slide landingImage"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ borderRadius: "50%", height: 20, width: 20 }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ borderRadius: "50%", height: 20, width: 20 }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ borderRadius: "50%", height: 20, width: 20 }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          style={{ borderRadius: "50%", height: 20, width: 20 }}
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={carousel1}
            class="d-block w-100"
            alt="..."
            style={{ height: "100vh" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="carouselTitle">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={carousel2}
            class="d-block w-100"
            alt="..."
            style={{ height: "100vh" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={carousel3}
            class="d-block w-100"
            alt="..."
            style={{ height: "100vh" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={carousel4}
            class="d-block w-100"
            alt="..."
            style={{ height: "100vh" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
