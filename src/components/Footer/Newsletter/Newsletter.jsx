import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import "./Newsletter.scss";

import NewsletterImg from "../../../assets/newsletter-bg.jpeg";

const Newsletter = () => {
  return (
    <section id="news">
      <div
        class="Newsletter-section"
        style={{
          backgroundImage: `url(${NewsletterImg})`,
          backgroundSize: "cover"
        }}
      >
        <div className="newsletter-content">
          <span className="small-text">Newsletter</span>
          <span className="big-text">
            Sign up for latest updates and offers
          </span>
          <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <span className="text">
            Will be used in accordance with our Privacy Policy
          </span>
          <span className="social-icons">
            <div className="icon">
              <FaLinkedinIn size={14} />
            </div>
            <div className="icon">
              <FaFacebookF size={14} />
            </div>
            <div className="icon">
              <FaTwitter size={14} />
            </div>
            <div className="icon">
              <FaInstagram size={14} />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
