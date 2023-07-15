import "./Products1.scss";
//import Container from "react-bootstrap/Container";
//import { Row, Col } from "react-bootstrap";

import Product1 from "./Product1/Product1";

const Products1 = ({ product1s, innerPage})=> {
  return (
    <section id="Products1" class="section-p2">
     {!innerPage && <div class="Heading ">
        <h2>Featured Products</h2>
        <p>Kimonos for women</p>
      </div>}
      <div>
        <div class="Products1-container">
          <div class="products1">
            {product1s?.data?.map((item) => (
              <Product1 key={item.id} id={item.id} data={item.attributes} />
            ))}
          </div>
        </div>
      </div>



    </section>
  );
};

export default Products1;
