import "./Products.scss";
//import Container from "react-bootstrap/Container";
//import { Row, Col } from "react-bootstrap";

import Product from "./Product/Product";

const Products = ({ products, innerPage})=> {
  return (
    <section id="Products" class="section-p1">
     {!innerPage && <div class="Heading">

        <h2>Featured Products</h2>
        <p>Blazers for women</p>
      </div>}
      <div>
        <div class="products-container">
          <div class="products">
            {products?.data?.map((item) => (
              <Product key={item.id} id={item.id} data={item.attributes} />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Products;
