import React from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";
//import "./RelatedProducts.scss";

const RelatedProducts = ({ productId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&pagination[start]=0&pagination[limit]=4`
  );


  return (
    <div class="related-products">
      <Products class="container" products={data} />

    </div>

  );
};


export default RelatedProducts;
