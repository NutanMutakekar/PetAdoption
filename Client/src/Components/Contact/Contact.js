import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:petadoption@gmail.com" target="_blank">
          petadoption@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/petadoption/" target="_blank">
          User Name: petadoption
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/petadoption" target="_blank">
          petadoption
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/petadoption/" target="_blank">
        petadoption
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+1234567890" target="_blank">
          +91 1234567890
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
