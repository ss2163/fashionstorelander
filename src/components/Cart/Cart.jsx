import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";

import "./Cart.scss";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({setShowCart}) => {
  const {cartItems, cartSubTotal} = useContext(Context);
  //const {cartItems1, cartSubTotal1} = useContext(Context);

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const handlePayment = async () => {
    try {
        const stripe = await stripePromise;
        const res = await makePaymentRequest.post("/api/orders", {
          products: cartItems,
        });
        // const res1 = await makePaymentRequest.post("/api/order1s", {
        //   product1s: cartItems1,
        // });

        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
        // await stripe.redirectToCheckout({
        //   sessionId: res1.data.stripeSession.id,
        // });
    } catch (err) {
        console.log(err);
    }

  };

  const navigate = useNavigate();
  return(
    <div class="cart-panel">
      <div class="opac-layer"></div>
      <div class="cart-content">

        <div class="cart-header">
          <span class="heading">Shopping Cart</span>
          <span class="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span class="text">close</span>

          </span>
        </div>

        {!cartItems?.length && (
          <div class="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
            <button class="return-cta" onClick={() => navigate("/")}>RETURN TO SHOP</button>
          </div>
        )}


        {!!cartItems?.length && (
          <>

            <CartItem />
              <div class="cart-footer">
                <div class="subtotal">
                  <span class="text">Subtotal:</span>
                  <span class="text total">$ {cartSubTotal}</span>

                </div>
                <div class="button">
                  <button class="checkout-cta" onClick={handlePayment}>Checkout</button>

                </div>

              </div>
          </>
        )}

      </div>



    </div>


  );
};

export default Cart;
