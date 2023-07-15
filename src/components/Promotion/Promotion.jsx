import React from "react";
import "./Promotion.scss";

import PromoImg from "../../assets/AEL.jpg";


const Promotion = () => {
  return (
    <section id="Promotion" class="promotion-p1">
      <div class="des">
        <img src={PromoImg} alt="" />
        <div class="content">
          <div class="row">
            <h4>LIMITED TIME</h4>
            <h3 class="heading">ANNOUNCE YOUR PROMOTION</h3>
            <h5>Include the smaller details of your promotion in the text below the title.</h5>
            <div class="ctas">
              <button type="button" class="btn-lg "> Shop This </button>
              <button type="button" class="btn-lg v2"> Shop All</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );

};

export default Promotion;
