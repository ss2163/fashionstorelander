import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";


import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import {Context} from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {cartCount} = useContext(Context);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <header class={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div class="header-content">
          <ul class="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li><a class="nav-link" href="#footer">About</a></li>
            <li><a class="nav-link" href="#Products">Categories</a></li>
          </ul>
          <div class="center" onClick={() => navigate("/")}>Lander</div>
          <div class="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span class="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
