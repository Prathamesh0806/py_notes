import React from "react";

import HighlightIcon from "@material-ui/icons/Highlight";

import "./navBar.css";

const NavBar = () => {
  return (
    <header class="header">
      <h1 className="logo">
        <HighlightIcon fontSize="large" />
        PY-NOTES
      </h1>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default NavBar;
