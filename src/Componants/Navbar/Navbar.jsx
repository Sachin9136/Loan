import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
  {/* <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle" />
        <div className="preloader-img pere-text">
          <img src="assets/img/logo/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div> */}
  {/* Preloader Start */}
  <header>
    {/* Header Start */}
    <div className="header-area header-transparent">
      <div className="main-header  header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-lg-2 col-md-1">
              <div className="logo">
                <a href="index.php">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="menu-main d-flex align-items-center justify-content-end">
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <ul id="navigation">
                    <li className="<?= (basename($_SERVER['PHP_SELF']) == 'index.php') ? 'active' : ''; ?>">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="<?= (basename($_SERVER['PHP_SELF']) == 'about.php') ? 'active' : ''; ?>">
                      <Link to="about">About</Link>
                    </li>
                    <li className="<?= (basename($_SERVER['PHP_SELF']) == 'services.php') ? 'active' : ''; ?>">
                      <Link to="service">Services</Link>
                    </li>
                    <li className="<?= (basename($_SERVER['PHP_SELF']) == 'contact.php') ? 'active' : ''; ?>">
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-right-btn f-right d-none d-lg-block">
                  <a href="tel:+91 1234567892" className="btn header-btn">
                    +91 12345678990{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header End */}
  </header>
</>

    </div>
  )
}

export default Navbar
