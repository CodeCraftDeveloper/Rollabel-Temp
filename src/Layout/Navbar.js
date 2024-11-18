import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";

//import images
import logoLight from "../components/Images/rollable-logo-white.png";
import logoDark from "../components/Images/rollable-logo-dark.png";
import { Link } from "react-router-dom";

const NavBar = ({ isDark }) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

  const isDarkClass = isDark ? "navbar-light" : "";

  return (
    <React.Fragment>
      <span>
        <nav
          className={
            "navbar navbar-expand-lg fixed-top " +
            isDarkClass +
            " sticky " +
            navClass
          }
          id="navbar"
        >
          <Container>
            <Link className="navbar-brand logo text-uppercase" to="/">
              {isDark ? (
                <>
                  <img
                    src={logoDark}
                    className="logo-light"
                    alt=""
                    height="122"
                  />
                  <img
                    src={logoDark}
                    className="logo-dark"
                    alt=""
                    height="122"
                  />
                </>
              ) : (
                <>
                  <img
                    src={logoDark}
                    className="logo-dark"
                    alt=""
                    height="100"
                  />
                  <img
                    src={logoLight}
                    className="logo-light"
                    alt=""
                    height="100"
                  />
                </>
              )}
            </Link>
            <NavbarToggler
              className="navbar-toggler"
              type="button"
              onClick={toggle}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
            <Collapse
              isOpen={isOpenMenu}
              className="navbar-collapse"
              id="navbarNav"
            >
              <Scrollspy
                offset={-18}
                items={[
                  "home",
                  "services",
                  "process",
                  "testimonial",
                  "portfolio",
                  "pricing",
                  "blog",
                  "contact",
                ]}
                currentClassName="active"
                className="navbar-nav ms-auto navbar-center"
                id="mySidenav"
              >
                <li className="nav-item">
                  <NavLink href="#home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#services">Service</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#process">Process</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#testimonial">Testimonial</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#pricing">Pricing</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#contact">Contact</NavLink>
                </li>
              </Scrollspy>
            </Collapse>
          </Container>
        </nav>
      </span>
    </React.Fragment>
  );
};

export default NavBar;
