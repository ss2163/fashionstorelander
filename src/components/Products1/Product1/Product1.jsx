import { useNavigate } from "react-router-dom";
import React from "react";
import "./Product1.scss";

import { CgShoppingCart } from "react-icons/cg";


const Product1 = ({ id, data }) => {

  const navigate = useNavigate();
  return (
    <div class="pro">
      <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
        <div class="led">
          <span>Lander</span>
          <h4>{data.title}</h4>

          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>

          </div>
          <span class="price">
            $ {data.price}
          </span>
        </div>
        <span class="cart" onClick={() => navigate("/product1/"+id)}>
          <CgShoppingCart />
        </span>
    </div>

  );

};

export default Product1;
