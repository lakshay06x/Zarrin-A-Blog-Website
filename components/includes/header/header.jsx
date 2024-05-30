import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../public/asset/images/logo.png";
import NavMenu from "./navMenu";
import("bootstrap/dist/js/bootstrap.bundle.min.js");

function header() {

      
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand active navTitle">
            <Image src={LogoImage} alt="logo" />
            Zarrin
          </a>
        </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
           <NavMenu/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
