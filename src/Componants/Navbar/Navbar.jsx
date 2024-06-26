import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <>
        <header>
          <div className="header-area header-transparent">
            <div className="main-header  header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-sm-8 col-md-8 col-lg-4">
                    <div className="logo">
                      <Link to="/">
                        <img src="assets/img/logo/logo2.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-8 d-flex justify-content-end">
                    <div className="menu-main d-flex align-items-center justify-content-end">
                      <div className="main-menu f-right d-none d-lg-block">
                        <ul id="navigation">
                          <li className="">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="">
                            <Link to="about">About</Link>
                          </li>
                          <li className="">
                            <Link to="service">Services</Link>
                          </li>
                          <li className="">
                            <Link to="contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="header-right-btn f-right d-none d-lg-block">
                        <a href="tel:+91 9939130196" className="btn header-btn">
                          +91 9939130196{" "}
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end" />
                    <button
                      class="btn btn-primary mobile-menu p-3 text-dark bg-white"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i class="fa-solid fa-bars"></i>
                    </button>
                    <div
                      class="offcanvas offcanvas-end"
                      tabindex="-1"
                      id="offcanvasRight"
                      aria-labelledby="offcanvasRightLabel"
                    >
                      <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">
                          Menu
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="offcanvas-body">
                        <div className="menu-main d-flex align-items-center justify-content-center">
                          {/* Main-menu */}
                          <div>
                            <ul id="navigation">
                              <li className=" pb-2 border-bottom">
                                <Link to="/">Home</Link>
                              </li>
                              <li className=" pb-2 border-bottom">
                                <Link to="about">About</Link>
                              </li>
                              <li className=" pb-2 border-bottom">
                                <Link to="service">Services</Link>
                              </li>
                              <li className=" pb-2 border-bottom">
                                <Link to="contact">Contact</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="header-right-btn f-right d-none d-lg-block">
                            <a
                              href="tel:+91 9939130196"
                              className="btn header-btn"
                            >
                              +91 9939130196{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Navbar;
