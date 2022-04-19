import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* <div>
        <a href="https://twitter.com/Abraham_35">
          <BsTwitter />
        </a>
      </div> */}
      <div>
        <a href="https://www.linkedin.com/in/abraham-kristanto-399091141/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/abkristanto/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
