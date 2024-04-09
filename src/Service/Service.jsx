import React from 'react';
import {Link} from "react-router-dom";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <main>
  {/* Hero Start*/}
  <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="hero-cap text-center pt-50">
            <h2>Services</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Hero End */}
  {/* Services Area Start */}
  <div className="services-area section-padding30">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12">
          {/* Section Tittle */}
          <div className="section-tittle text-center mb-80">
            <span>Services that we are providing</span>
            <h2>High Performance Services For All Industries.</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/briefcase.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Business Loan</Link>
              </h5>
              <p>
                With Our Flexible Business Loans, Your Company Can Get The Financial Boost It Needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/house.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Home Loans</Link>
              </h5>
              <p>
              Explore Our Selection Of Home Loan Products To See What Your Dream Home Awaits.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/personal.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Personal Loan</Link>
              </h5>
              <p>
              With Our Vast Range Of Personal Loans, You Can Make Your Dreams A Reality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/credit-card.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Credit cards</Link>
              </h5>
              <p>
              With Our Feature-Rich And Incentives Credit Cards, You Can Upgrade Your Lifestyle.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/assets.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Gold Loan</Link>
              </h5>
              <p>
              Fulfill Your Financial Needs With Gold Loan From Various Banking Partners
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/education.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Education Loans</Link>
              </h5>
              <p>
              With Our Specialized Education Loans, You Can Ensure Your Child's Future Academic Success.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/new-car.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Car Loan</Link>
              </h5>
              <p>
              With Our Lightning-fast And Flexible Auto Loans, You Can Make Your Dream Car A Reality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/loan.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Loan Against Property</Link>
              </h5>
              <p>
                Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut
                labore et dolore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Insurance cards Starts*/}
  <div className="services-area section-padding30">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10">
          {/* Section Tittle */}
          <div className="section-tittle text-center mb-80">
            {/* <span>Services that we are providing</span> */}
            <h2>Insurance</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/insurance.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Life Insurance</Link>
              </h5>
              <p>
              Use Our Dependable Life Insurance Plans to Safeguard the Future of Your Loved Ones.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/healthcare.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Health Insurance</Link>
              </h5>
              <p>
              Discover Our Excellent Insurance Options To Make Sure Your Health Is In Good Hands.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
              <img src="assets/img/logo/shield.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">General Insurance</Link>
              </h5>
              <p>
              Simple Insurance: Our Knowledge, Your Safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Insurance cards Ends*/}
  {/* Services Area End */}
</main>

    </div>
  )
}

export default Service
