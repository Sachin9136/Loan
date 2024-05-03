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
          <div className="single-cat single-cat2 text-center mb-50 bg-one">
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
          <div className="single-cat single-cat2 text-center mb-50 bg-two">
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
          <div className="single-cat single-cat2 text-center mb-50 bg-three">
            <div className="cat-icon">
              <img src="assets/img/logo/personal.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Personal Loan</Link>
              </h5>
              <p>
              Get funds for any purpose with our flexible personal loans. Quick approval, competitive rates. Apply now!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50 bg-four">
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
          <div className="single-cat single-cat2 text-center mb-50 bg-one">
            <div className="cat-icon">
              <img src="assets/img/logo/assets.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Gold Loan</Link>
              </h5>
              <p>
              Unlock liquidity with our hassle-free gold loans. Fast processing, low interest rates. Secure your future today.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50 bg-two">
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
          <div className="single-cat single-cat2 text-center mb-50 bg-three">
            <div className="cat-icon">
              <img src="assets/img/logo/loan.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Loan Against Property</Link>
              </h5>
              <p>
              Unlock value of property with our Loan Against Property. Flexible, low-interest loans tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50 bg-three">
            <div className="cat-icon">
              <img className='display-1' src="assets/img/logo/income-tax.png" alt="" width="100%"/>
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">Income Tax Consultant</Link>
              </h5>
              <p>
                Maximize returns with expert income tax consulting. Navigate complexities, optimize savings.
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
          <div className="section-tittle text-center mb-80 bg-one">
            {/* <span>Services that we are providing</span> */}
            <h2>Insurance</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50 bg-four">
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
          <div className="single-cat single-cat2 text-center mb-50 bg-two">
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
          <div className="single-cat single-cat2 text-center mb-50 bg-three">
            <div className="cat-icon">
              <img src="assets/img/logo/shield.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">General Insurance</Link>
              </h5>
              <p>
              Protect what matters most with our comprehensive and reliable general insurance coverage options.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-cat single-cat2 text-center mb-50 bg-one">
            <div className="cat-icon">
              <img src="assets/img/logo/4599163.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5>
                <Link to="/apply_form">All Type of Insurance</Link>
              </h5>
              <p>
              Secure your assets with our range of insurance plans. Protect what matters most. Contact us for details.
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
