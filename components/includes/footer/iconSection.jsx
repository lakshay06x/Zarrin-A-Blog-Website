/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const IconsSections = () => {
  return (
    
    <section className="text-center">
        <div className="container">
          
            <a className="btn" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="btn" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="btn" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn" href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          
        </div>
      </section>
    
  );
};
export default IconsSections;