import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState();
  const [product1s, setProduct1s] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) =>
        (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  // useEffect(() => {
  //   let count = 0;
  //   cartItems1?.map((item) => (count += item.attributes.quantity));
  //   setCartCount1(count);
  //
  //   let subTotal = 0;
  //   cartItems1.map(
  //     (item) =>
  //       (subTotal += item.attributes.price * item.attributes.quantity)
  //   );
  //   setCartSubTotal1(subTotal);
  // }, [cartItems1]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    //let index1 = items?.findIndex((p) => p.id === product1?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
        product.attributes.quantity = quantity;
        items = [...items, product];
    }
    setCartItems(items);
  }
  const handleAddToCart1 = (product1, quantity) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product1?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
        product1.attributes.quantity = quantity;
        items = [...items, product1];
    }
    setCartItems(items);
  }
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product?.id);
    setCartItems(items);
  };
  const handleRemoveFromCart1 = (product1) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product1?.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
        if (items[index].attributes.quantity === 1) return;
        items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };
  const handleCartProductQuantity1 = (type, product1) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product1?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
        if (items[index].attributes.quantity === 1) return;
        items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };


  return (
    <Context.Provider value={{products, setProducts, product1s, setProduct1s, cartItems, setCartItems, cartCount, setCartCount, cartSubTotal, setCartSubTotal, handleAddToCart, handleRemoveFromCart, handleCartProductQuantity, handleAddToCart1, handleRemoveFromCart1, handleCartProductQuantity1}}>{children}</Context.Provider>

  );

};




export default AppContext;
