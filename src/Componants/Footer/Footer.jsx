import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-area">
  <div className="container">
    <div className="footer-top footer-padding">
      <div className="row justify-content-between">
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
          <div className="single-footer-caption mb-50">
            <div className="single-footer-caption mb-30">
              {/* logo */}
              <div className="logo">
                <Link to="/">
                  <img src="assets/img/logo/logo.jpg" alt="" />
                </Link> 
              </div>
              <div className="footer-pera pt-3">
                <p>
                  Heaven fruitful doesn't over lesser days appear creeping
                  seasons so behold bearing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
          <div className="single-footer-caption mb-50">
            <div className="footer-tittle">
              <h4>Quick Link</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link> 
                </li>
                <li>
                  <Link to="/about">About</Link> 
                </li>
                <li>
                  <Link to="/services">Services</Link> 
                </li>
                <li>
                  <Link to="/contact"> Contact Us</Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="single-footer-caption mb-50">
            <div className="footer-tittle">
              <h4>Loans</h4>
              <ul>
                <li>
                  <Link to="#">Home Loan</Link> 
                </li>
                <li>
                  <Link to="#">Bussiness Loan</Link> 
                </li>
                <li>
                  <Link to="#">Car Loan</Link> 
                </li>
                <li>
                  <Link to="#">Gold Loan</Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
          <div className="single-footer-caption mb-50">
            <div className="footer-tittle">
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="#">+91 9939130196</Link> <br />
                  <Link to="#">+91 7366031877</Link> 
                </li>
                <li>
                  <Link to="#">loanservicepoint01@gmail.com</Link> 
                </li>
                <li>
                  <Link to="#">Makhdum Sarai Rd, near FAIZ HOSPITAL, Siwan, Bihar 841226</Link> 
                </li>
                <li>
                  <Link to="/privacy_policy">Privacy Policy</Link> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-xl-9 col-lg-8">
          <div className="footer-copy-right">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <Link to="https://www.srnsdigitechnologies.co.in/" target="_blank">
                SRNS Digi Technologies
              </Link> 
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4">
          {/* Footer Social */}
          <div className="footer-social f-right">
            {/* <Link to="#">
              <i className="fab fa-twitter" />
            </Link>  */}
            <a href="https://www.facebook.com/profile.php?id=61557768758518" target='blank'>
              <i className="fab fa-facebook-f fs-5" />
            </a> 
            <a href="#">
              <i className="fas fa-globe  fs-5" />
            </a> 
            {/* <Link to="#">
              <i className="fab fa-instagram" />
            </Link>  */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
