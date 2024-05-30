/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import FooterMenu from "./footerMenu";
import IconsSections from "./iconSection";
import LogoImage from "../../../public/asset/images/logo.png";
function footer() {
  return (
    <div>
      <div className="upperFooter">
        <div className="container">
          <h1 className="footerUpperHeading">Get our stories delivered from</h1>
          <h1 className="footerUpperHeading">us to your inbox weekly.</h1>
          <form action="#" className="d-flex justify-content-center footerForm">
            <div className="input-group mb-3">
              <input
                className="footerPlaceHolder rounded ps-3"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              ></input>
              <div className="input-group-append">
                <a href="#" className=" footerButton">
                  Get Started
                </a>
              </div>
            </div>
          </form>
          <p className="footerP">
            Get a response tomorrow if you submit by 9pm today. If we receive
            your email after{" "}
          </p>
          <p className="footerP">
            9pm, you will get a response the following day.
          </p>
        </div>
      </div>
      <div className="lowerFooter">
        <div className="lowerFooterName">
          <Image src={LogoImage} alt="..." />
          <h1 className="footerH">Zarrin</h1>
        </div>
        <FooterMenu />
      </div>
      <IconsSections />
      <div className="custom-line"></div>
      <div className="copyrightContainer">
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </div>
    </div>
  );
}

export default footer;
