import React, { useEffect, useContext } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";
import Press from "./Press/Press";
import Products from "../Products/Products";
import Products1 from "../Products1/Products1";
import Promotion from "../Promotion/Promotion";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {

      setProducts(res);

    });

  };

  const { product1s, setProduct1s } = useContext(Context);

  useEffect(() => {
    getProduct1s();
  },[]);

  const getProduct1s = () => {
    fetchDataFromApi("/api/product1s?populate=*").then((res) => {

      setProduct1s(res);

    });

  };

  return (
    <div class="home">
      <Banner />
      <div class="main-content">
        <div class="layout">
          <Feature />
          <Testimonials />
          <Press />
          <Products products={products} />
          <Products1 product1s={product1s}/>
          <Promotion />

        </div>
      </div>


    </div>
  );
};
export default Home;
