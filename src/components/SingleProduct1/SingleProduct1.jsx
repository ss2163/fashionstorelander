import { useState, useContext } from "react";
import RelatedProducts1 from "./RelatedProducts1/RelatedProducts1";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";


import "./SingleProduct1.scss";

const SingleProduct1 = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const {data} = useFetch(`/api/product1s?populate=*&[filters][id]=${id}`);
  const { handleAddToCart1 } = useContext(Context);
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if(prevState === 1) return 1;
      return prevState - 1;
    });

  };

  if(!data) return;
  const product1 = data.data[0].attributes
  return (
    <div class="single-product-main-content">
      <div class="layout">
        <div class="single-product-page">
          <div class="left">
            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + product1.img.data[0].attributes.url} alt="" />

          </div>
          <div class="right">
            <span class="name">{product1.title}</span>
            <span class="price">$ {product1.price}</span>
            <span class="det">{product1.desc}</span>

            <div class="cart-buttons">
              <div class="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>


              </div>
              <button class="add-to-cart-button" onClick={() => {
                handleAddToCart1(data.data[0], quantity)
                setQuantity(1);
              }}>
                <FaCartPlus size={20}/>
                ADD TO CART
              </button>
            </div>

            <span class="divider" />

            <div class="info-item">
              <span class="text-bold">
                Category:{" "}
                <span>Kimonos</span>
              </span>
              <span class="text-bold">
                Share:
                <span class="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />


                </span>
              </span>
            </div>

          </div>

        </div>
        <RelatedProducts1 product1Id={id}/>

      </div>

    </div>

  );

};

export default SingleProduct1;
