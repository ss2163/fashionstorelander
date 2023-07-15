
import React from "react";
import "./Banner.scss";
import { useNavigate } from "react-router-dom";
import BannerImg from "../../../assets/banner.png";


const Banner = () => {

  return (
    <section id="title">
      <div class="pro-img">
        <img src={BannerImg} alt="" />

        <div class="content">
          <div>
            <h1>Lander</h1>
            <h5>Fashion begins here </h5>
            <p>Be the real one</p>

            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2"><a class="nav-link" href="#Products">Shop Now</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
