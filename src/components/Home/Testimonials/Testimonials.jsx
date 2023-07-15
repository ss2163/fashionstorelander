import React from "react";

import "./Testimonials.scss";

import Carousel from 'react-bootstrap/Carousel';



function IndividualIntervals() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Carousel.Caption>
          <h3 class="text">we have curated all kinds of products for you only. Different kinds of outfits to shoes</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5531541/pexels-photo-5531541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Carousel.Caption>
          <h3 class="text">Lander is a brand which designs the dream and the reality of everyday life</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5418886/pexels-photo-5418886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Carousel.Caption>
          <h3 class="text">We have some renowned fashion designers who will provide you the best tips to find your own style according to your personality</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Carousel.Caption>
          <h3 class="text">Our products on casual wears</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8386655/pexels-photo-8386655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Carousel.Caption>
          <h3 class="text">Products on casual wears</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8311891/pexels-photo-8311891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Carousel.Caption>
          <h3 class="text">Our exclusive products on jackets and blazzers</h3>

        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}




const Testimonials = () => {
  return (
    <section id="testimonials">

        <div>
          <IndividualIntervals />
        </div>
    </section>
  );
};

export default Testimonials;
