import React from "react";
import useFetch from "../../../hooks/useFetch";
import Products1 from "../../Products1/Products1";
//import "./RelatedProducts.scss";

const RelatedProducts1 = ({ product1Id }) => {
  const { data } = useFetch(
    `/api/product1s?populate=*&filters[id][$ne]=${product1Id}&pagination[start]=0&pagination[limit]=4`
  );


  return (
    <div class="related-products">
      <Products1 class="container" product1s={data} />

    </div>

  );
};


export default RelatedProducts1;
