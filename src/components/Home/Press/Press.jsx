import React from "react";

import "./Press.scss";

import TechImg from "../../../assets/techcrunch.png";
import TnwImg from "../../../assets/tnw.png";
import BiziImg from "../../../assets/bizinsider.png";
import MashImg from "../../../assets/mashable.png";

const Press = () => {
  return (
    <section id="press">
      <div class="press-logo">
        <div class="logo">
          <img  src={TechImg} alt="tc-logo" />
        </div>
        <div class="logo">
          <img  src={TnwImg} alt="tnw-logo" />
        </div>
        <div class="logo">
          <img  src={BiziImg} alt="biz-insider-logo" />
        </div>
        <div class="logo">  
          <img  src={MashImg} alt="mashable-logo" />
        </div>
      </div>
    </section>


  );

};

export default Press;
