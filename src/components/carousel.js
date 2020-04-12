import React from "react";
import code1 from '../images/code1.jpg';
import code2 from '../images/code2.jpg';
import code3 from '../images/code3.jpg';
import code4 from '../images/code4.jpg';
import code5 from '../images/code5.jpg';
import code6 from '../images/code6.jpg';

export default function Carousel() {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="3"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={code1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={code2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={code3} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={code4} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={code5} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={code6} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
