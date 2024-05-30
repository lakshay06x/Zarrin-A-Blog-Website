/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterMenu = () => {
  const routes = [
    { 
      title : "Home",
      path : "/",
    },
    { 
      title : "Blog",
      path : "/blog",
    },
    { 
      title : "About",
      path : "/about",
    },
    {
      title: "Contact Us",
      path: "/about"
    }
  ];
  return (
    <ul className="footerMenu">
    {routes.map((route, index) => (
        <li key={index} className="">
        <Link href={route.path} legacyBehavior>
            <a className="footerLink">{route.title}</a>
          </Link>
        </li>
      ))}
        </ul>
  );
};
export default FooterMenu;