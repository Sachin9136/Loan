import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Partner_Carousal from "../Componants/Partner_Carousal/Partner_Carousal";
import Testimonial from "../Componants/Testimonial/Testimonial";
import Emi_Calculator from "../Componants/Emi_Calculator/Emi_Calculator";

const Home = () => {
  return (
    <div>
      <main>
        {/* slider Area Start*/}
        <div
          className="slider-area slider-height"
          data-background="assets/img/hero/h1_hero.jpg"
        >
          <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider">
              <div className="slider-cap-wrapper">
                <div className="hero__caption">
                  <p data-animation="fadeInLeft" data-delay=".2s">
                    Fulfill your financial objectives
                  </p>
                  <h1 data-animation="fadeInLeft" data-delay=".5s">
                    Small business loans to cover day-to-day costs.
                  </h1>
                  {/* Hero Btn */}
                  <Link
                    to="/apply_form"
                    className="btn hero-btn"
                    data-animation="fadeInLeft"
                    data-delay=".8s"
                  >
                    Apply for Loan
                  </Link>
                </div>
                <div className="hero__img">
                  <img src="assets/img/hero/hero_img.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Single Slider */}
          </div>
          {/* slider-footer Start */}
          <div className="slider-footer section-bg d-none d-sm-block ">
            <div className="footer-wrapper">
              {/* single */}
              <div className="single-caption">
                <div className="single-img">
                  <img src="assets/img/hero/hero_footer.png" alt="" />
                </div>
              </div>
              {/* single */}
              <div className="single-caption">
                <div className="caption-icon">
                  <span className="flaticon-clock" />
                </div>
                <div className="caption">
                  <p>Easy Apply &amp;</p>
                  <p>Fast Approval</p>
                </div>
              </div>
              {/* single */}
              <div className="single-caption">
                <div className="caption-icon">
                  <span className="flaticon-like" />
                </div>
                <div className="caption">
                  <p>Get money in 2-4 </p>
                  <p>working days</p>
                </div>
              </div>
              {/* single */}
              <div className="single-caption">
                <div className="caption-icon">
                  <span className="flaticon-money" />
                </div>
                <div className="caption">
                  <p>Tenure up to 50</p>
                  <p>Months</p>
                </div>
              </div>
            </div>
          </div>
          {/* slider-footer End */}
        </div>
        {/* slider Area End*/}
        {/* About Law Start*/}
        <div className="about-low-area section-padding2 py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-caption mb-50">
                  {/* Section Tittle */}
                  <div className="section-tittle mb-35">
                    <span>About Our Company</span>
                    <h2>
                      Building a Stronger Financial Future with Helpful Support.
                    </h2>
                  </div>
                  <p>
                    Sufficient financial support enables people to make
                    well-informed decisions and optimize their personal and
                    family budgets for long-term security. It establishes the
                    foundation for reaching financial objectives and cutting
                    back on wasteful spending.
                  </p>
                  <p>
                    Having access to excellent financial advice makes it easier
                    to navigate the complicated world of investments and
                    guarantees that your hard-earned money is working for you.
                    It encourages financial literacy, which is essential to
                    creating a prosperous and sustainable future.
                  </p>
                  <Link to="/apply_form" className="btn">
                    Get Loan
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                {/* about-img */}
                <div className="about-img ">
                  <div className="about-font-img d-none d-lg-block">
                    <img
                      src="assets/img/gallery/about2.jpg"
                      alt=""
                      width="60%"
                    />
                  </div>
                  <div className="about-back-img ">
                    <img
                      src="assets/img/gallery/about1.jpg"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Law End*/}
        {/* Services Area Start */}
        <div
          className="services-area pt-150 pb-150"
          data-background="assets/img/gallery/section_bg02.jpg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-10 col-sm-12">
                {/* Section Tittle */}
                <div className="section-tittle text-center mb-80">
                  <span>Services that we are providing</span>
                  <h2>Superior Functioning Services for Every Sector.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50 bg-one">
                  <div className="cat-icon">
                  <img src="assets/img/logo/briefcase.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="service">Business Loan</Link>
                    </h5>
                    <p>
                      With Our Flexible Business Loans, Your Company Can Get The
                      Financial Boost It Needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat single-cat2 text-center mb-50 bg-two">
                  <div className="cat-icon">
                  <img src="assets/img/logo/credit-card.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="/apply_form">Credit cards</Link>
                    </h5>
                    <p>
                      With Our Feature-Rich And Incentives Credit Cards, You Can
                      Upgrade Your Lifestyle.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat single-cat2 text-center mb-50 bg-three">
                  <div className="cat-icon">
                  <img src="assets/img/logo/house.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="/apply_form">Home Loans</Link>
                    </h5>
                    <p>
                      Explore Our Selection Of Home Loan Products To See What
                      Your Dream Home Awaits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat single-cat2 text-center mb-50 bg-four">
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
            </div>
          </div>
        </div>
        {/* Services Area End */}
        {/* Support Company Start*/}
        <div className="support-company-area section-padding3 fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img mb-50">
                  <img src="assets/img/gallery/single2.jpg" alt="" />
                  <div className="support-img-cap">
                    <span>Since 1992</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle">
                    <span>Why Choose Our Company</span>
                    <h2>We Assure You of a Sustainable Future.</h2>
                  </div>
                  <div className="support-caption">
                    <p>
                    For all of your financial needs, including balance transfers, credit cards, business loans, personal loans, and home loans, Loan Service Point is a cutting-edge one-stop shop. One of the top credit lending companies in India, Loan Service Point is present throughout more than 2000 cities and was established by professionals and financial experts with over 25 years of experience, who have built a solid reputation by meeting the demands of over 10 lakh customers. Our highly skilled in-house Loan Calculator algorithm enables us to provide you with the greatest discounts and possibilities for the loan or financial product of your choosing. Our algorithmic engines work for you by utilizing solid factual data derived from the most recent relative market changes and a determined forecast of future trends.
                    </p>
                    <div className="select-suport-items">
                      <label className="single-items">
                        EASY APPLY & FAST APPROVAL
                        <input
                          type="checkbox"
                          defaultChecked="checked active"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="single-items">
                        GET MONEY IN 2-4 WORKING DAYS
                        <input
                          type="checkbox"
                          defaultChecked="checked active"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="single-items">
                        TENURE UP TO 50 LAKH PER MONTHS
                        <input
                          type="checkbox"
                          defaultChecked="checked active"
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Support Company End*/}
        {/* Application Area Start */}
        <div className="application-area application_bg pt-150 pb-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                {/* Section Tittle */}
                <div className="section-tittle section-tittle2 text-center mb-45">
                  <span>Apply in Three Easy Steps</span>
                  <h2>Easy Application Process For Any Types of Loan</h2>
                </div>
              </div>
            </div>
            <Emi_Calculator />
          </div>
        </div>
        {/* Application Area End */}
        {/* Testimonial Start */}
        <div className="testimonial-area t-bg testimonial-padding">
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center text-white mb-5 pt-5">
                  Testimonials
                </h1>
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
        <Partner_Carousal />
        {/* Blog Ara End */}
      </main>
    </div>
  );
};

export default Home;
