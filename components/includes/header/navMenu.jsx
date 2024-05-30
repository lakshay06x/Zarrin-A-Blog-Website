/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const NavMenu = () => {
  const routes = [
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navGroup">
      {routes.map((route, index) => (
        <li key={index} className="nav-item navItem">
          <Link href={route.path} legacyBehavior>
            <a className="nav-link text-dark">{route.title}</a>
          </Link>
        </li>
      ))}
      <li className="nav-item navItem navSearch">
        <span>
          <BsSearch />
        </span>
      </li>
      <li className="nav-item navItem">
        <Link href="/about" legacyBehavior>
          <a className="nav-link text-dark">
            <button type="button" className="navButton">
              Contact Us
            </button>
          </a>
        </Link>
      </li>
    </ul>
  );
};
export default NavMenu;
