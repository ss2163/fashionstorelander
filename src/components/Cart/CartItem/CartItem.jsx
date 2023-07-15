import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";


import "./CartItem.scss";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div class="cart-products">
      {cartItems?.map((item) => (
        <div key={item.id} class="cart-product">
          <div class="img-container">
            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div class="pro-details">
            <span class="name">{item.attributes.title}</span>
            <MdClose class="close-btn" onClick={() => handleRemoveFromCart(item)}/>

            <div class="quantity-buttons">
              <span onClick={()=> handleCartProductQuantity("dec", item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={()=> handleCartProductQuantity("inc", item)}>+</span>


            </div>
            <div class="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span>$ {item.attributes.price * item.attributes.quantity}</span>

            </div>


          </div>
        </div>


      ))}



    </div>

  );




};




export default CartItem;
