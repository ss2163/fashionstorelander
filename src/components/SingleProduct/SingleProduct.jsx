import { useState, useContext } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
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


import "./SingleProduct.scss";


const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
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
  const product = data.data[0].attributes
  return (
    <div class="single-product-main-content">
      <div class="layout">
        <div class="single-product-page">
          <div class="left">
            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />

          </div>
          <div class="right">
            <span class="name">{product.title}</span>
            <span class="price">$ {product.price}</span>
            <span class="det">{product.desc}</span>

            <div class="cart-buttons">
              <div class="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>


              </div>
              <button class="add-to-cart-button" onClick={() => {
                handleAddToCart(data.data[0], quantity)
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
                <span>Blazers</span>
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
        <RelatedProducts productId={id}/>

      </div>

    </div>

  );

};

export default SingleProduct;
