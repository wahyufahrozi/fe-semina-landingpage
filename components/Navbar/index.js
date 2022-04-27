/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import NavLink from "../Navlink";
function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src="/images/logo.svg" alt="semina" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto my-3 my-lg-0">
            <NavLink href={"/"}> Home</NavLink>
            <NavLink href={"/browse"}> Browse</NavLink>
            <NavLink href={"/stories"}> Stories</NavLink>
            <NavLink href={"/about"}> About</NavLink>
          </div>
          <div className="d-grid">
            <a className="btn-navy" href="signin.html">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
