import React from "react";

import "./Feature.scss";

const Feature = () => {
  return (
    <section id="features">
      <div class="row">
        <div class="feature-box col-lg-4">
          <i class="icon fa-solid fa-circle-check fa-2x"></i>
          <h3>Easy to use.</h3>
          <p>One and only store trusted by millions of customers worldwide</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fa-solid fa-bullseye fa-2x"></i>
          <h3>Elite Clientele</h3>
          <p>We have all kinds beauty and healthcare products</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fa-sharp fa-solid fa-heart fa-2x"></i>
          <h3>A style for every story </h3>
          <p>Find the story of your life </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
