import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

//import Blaz1 from "../../../assets/products/Blazers1.png";

const Search =({setShowSearch}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}` && `/api/product1s?populate=*&filters[title][$contains]=${query}`
  );




  if (!query.length) {
    data = null;
  }



  return (
    <div class="search-modal">
      <div class="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div class="search-result-content">
        {!data?.data?.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.

          </div>
        )}



        <div class="search-results">
          {data?.data?.map((item) => (
            <div class="searc-result-item" key={item.id} onClick={() =>{navigate("/product/" + item.id); setShowSearch(false);}}>
              <div class="img-container">
                <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
              </div>
              <div class="pro-details">
                <span class="name">{item.attributes.title}</span>
                <span class="des">{item.attributes.desc}</span>
              </div>


            </div>

          ))}
          {data?.data?.map((item) => (
            <div class="searc-result-item" key={item.id} onClick={() =>{navigate("/product1/" + item.id); setShowSearch(false);}}>
              <div class="img-container">
                <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
              </div>
              <div class="pro-details">
                <span class="name">{item.attributes.title}</span>
                <span class="des">{item.attributes.desc}</span>
              </div>


            </div>

          ))}


        </div>
      </div>

    </div>
  );

};

export default Search;
