import React from "react";
import {Link} from "react-router-dom";

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
                    to="apply_form"
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
            <div className="single-slider">
              <div className="slider-cap-wrapper">
                <div className="hero__caption">
                  <p data-animation="fadeInLeft" data-delay=".2s">
                    Reach your financial objective.
                  </p>
                  <h1 data-animation="fadeInLeft" data-delay=".5s">
                    Small Company Loans for Everyday Costs.
                  </h1>
                  {/* Hero Btn */}
                  <Link
                    to="apply_form"
                    className="btn hero-btn"
                    data-animation="fadeInLeft"
                    data-delay=".8s"
                  >
                    Apply for Loan
                  </Link>
                </div>
                <div className="hero__img">
                  <img src="assets/img/hero/hero_img3.png" alt="" />
                </div>
              </div>
            </div>
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
        <div className="about-low-area section-padding2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-caption mb-50">
                  {/* Section Tittle */}
                  <div className="section-tittle mb-35">
                    <span>About Our Company</span>
                    <h2>
                      Creating a Better Financial Future with Good Assistance.
                    </h2>
                  </div>
                  <p>
                    Good financial assistance empowers individuals to make
                    informed decisions, optimizing personal and family budgets
                    for long-term security. It lays the groundwork for achieving
                    financial goals and reducing unnecessary expenditures.
                  </p>
                  <p>
                    Access to quality financial guidance helps in navigating
                    complex investment landscapes, ensuring your hard-earned
                    money works for you. It promotes financial literacy, crucial
                    for building a prosperous and sustainable future.
                  </p>
                  <Link to="apply_form" className="btn">
                    Apply for Loan
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
              <div className="col-lg-6 col-md-10">
                {/* Section Tittle */}
                <div className="section-tittle text-center mb-80">
                  <span>Services that we are providing</span>
                  <h2>High Performance Services For All Industries.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-work" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="service">Business Loan</Link>
                    </h5>
                    <p>
                      Consectetur adipisicing elit, sed doeiusmod tempor
                      incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-loan" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="service">Commercial Loans</Link>
                    </h5>
                    <p>
                      Consectetur adipisicing elit, sed doeiusmod tempor
                      incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-loan-1" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="service">Construction Loans</Link>
                    </h5>
                    <p>
                      Consectetur adipisicing elit, sed doeiusmod tempor
                      incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-like" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <Link to="service">Business Loan</Link>
                    </h5>
                    <p>
                      Consectetur adipisicing elit, sed doeiusmod tempor
                      incididunt ut labore et dolore
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
                    <h2>We Promise Sustainable Future For You.</h2>
                  </div>
                  <div className="support-caption">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className="select-suport-items">
                      <label className="single-items">
                        Aorem ipsum dgolor sitnfd amet dfgbn fbsdg
                        <input
                          type="checkbox"
                          defaultChecked="checked active"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="single-items">
                        Consectetur adipisicing bfnelit, sedb dvbnfo
                        <input
                          type="checkbox"
                          defaultChecked="checked active"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="single-items">
                        Eiusmod tempor incididunt vmgldupout labore
                        <input
                          type="checkbox"
                          defaultChecked="checked active"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="single-items">
                        Admkde mibvnim veniam, quivds cnostrud.
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
        <div
          className="application-area pt-150 pb-140"
          data-background="assets/img/gallery/section_bg03.jpg"
        >
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
            <div className="row justify-content-center">
              <div className="col-lg-9 col-xl-8">
                {/*Hero form */}
                <form action="#" className="search-box">
                  <div className="select-form">
                    <div className="select-itms">
                      <select name="select" id="select1">
                        <option value="">Select Amount</option>
                        <option value="">$120</option>
                        <option value="">$700</option>
                        <option value="">$750</option>
                        <option value="">$250</option>
                      </select>
                    </div>
                  </div>
                  <div className="select-form">
                    <div className="select-itms">
                      <select name="select" id="select1">
                        <option value="">Duration Month</option>
                        <option value="">7 Days</option>
                        <option value="">10 Days</option>
                        <option value="">14 Days Days</option>
                        <option value="">20 Days</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-form">
                    <input type="text" placeholder="Return Amount" />
                  </div>
                  <div className="search-form">
                    <Link to="apply_form">Apply for Loan</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Application Area End */}
        {/*Team Ara Start */}
        <div className="team-area section-padding30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* Section Tittle */}
                <div className="section-tittle text-center mb-70">
                  <span>Our Loan Section Team Mambers</span>
                  <h2>Take a look to our professional team members.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/single2.jpg" alt="" />
                    {/* Blog Social */}
                    <div className="team-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-globe" />
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Bruce Roberts</a>
                    </h3>
                    <p>Volunteer leader</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/single2.jpg" alt="" />
                    {/* Blog Social */}
                    <div className="team-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-globe" />
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Bruce Roberts</a>
                    </h3>
                    <p>Volunteer leader</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/single2.jpg" alt="" />
                    {/* Blog Social */}
                    <div className="team-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-globe" />
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Bruce Roberts</a>
                    </h3>
                    <p>Volunteer leader</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/gallery/single2.jpg" alt="" />
                    {/* Blog Social */}
                    <div className="team-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-globe" />
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Bruce Roberts</a>
                    </h3>
                    <p>Volunteer leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Ara End */}
        {/* Testimonial Start */}
        <div className="testimonial-area t-bg testimonial-padding">
          <div className="container ">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-11 col-lg-11 col-md-9">
                <div className="h1-testimonial-active">
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src="assets/img/gallery/testimonial.png" alt="" />
                        <p>
                          Navigating the loan process with this website was a
                          game-changer for me. Their platform made it incredibly
                          simple to compare options and apply. The customer
                          service team was always available to answer my
                          questions, making the entire process stress-free.
                          Highly recommended for anyone looking to secure a loan
                          without the hassle.
                        </p>
                      </div>
                      {/* founder */}
                      <div className="testimonial-founder d-flex align-items-center justify-content-center">
                        <div className="founder-img">
                          <img
                            src="assets/img/testmonial/Homepage_testi.png"
                            alt=""
                          />
                        </div>
                        <div className="founder-text">
                          <span>Sachin </span>
                          <p>Co Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src="assets/img/gallery/testimonial.png" alt="" />
                        <p>
                          I was skeptical about applying for a loan online, but
                          this site proved me wrong. The application process was
                          straightforward, and I was amazed by the quick
                          approval and disbursement. Their educational resources
                          also helped me understand the fine print, ensuring I
                          made an informed decision. A reliable partner for
                          financial needs.
                        </p>
                      </div>
                      {/* founder */}
                      <div className="testimonial-founder d-flex align-items-center justify-content-center">
                        <div className="founder-img">
                          <img
                            src="assets/img/testmonial/Homepage_testi.png"
                            alt=""
                          />
                        </div>
                        <div className="founder-text">
                          <span>Amit</span>
                          <p>Co Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src="assets/img/gallery/testimonial.png" alt="" />
                        <p>
                          This loan service website stands out for its
                          user-friendly interface and variety of loan options.
                          Whether it was for consolidating debt or financing a
                          major purchase, I found a plan that suited my budget
                          perfectly. Their commitment to transparency and
                          excellent customer support has earned my trust.
                        </p>
                      </div>
                      {/* founder */}
                      <div className="testimonial-founder d-flex align-items-center justify-content-center">
                        <div className="founder-img">
                          <img
                            src="assets/img/testmonial/Homepage_testi.png"
                            alt=""
                          />
                        </div>
                        <div className="founder-text">
                          <span>Sushil</span>
                          <p>Co Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Blog Ara Start */}
        {/* <div class="home-blog-area section-padding30">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-7 col-md-10">
                  <div class="section-tittle text-center mb-70">
                      <span>News form our latest blog</span>
                      <h2>News from around the world selected by us.</h2>
                  </div> 
              </div>
          </div>
          <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="single-blogs mb-30">
                      <div class="blog-images">
                          <img src="assets/img/gallery/blog1.png" alt="">
                      </div>
                      <div class="blog-captions">
                          <span>January 28, 2020</span>
                          <h2><a href="blog_details.html">The advent of pesticides brought 
                              in its benefits and pitfalls.</a></h2>
                          <p>October 6, a2020by Steve</p>
                      </div>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="single-blogs mb-30">
                      <div class="blog-images">
                          <img src="assets/img/gallery/blog2.png" alt="">
                      </div>
                      <div class="blog-captions">
                          <span>January 28, 2020</span>
                          <h2><a href="blog_details.html">The advent of pesticides brought 
                              in its benefits and pitfalls.</a></h2>
                          <p>October 6, a2020by Steve</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> */}
        {/* Blog Ara End */}
      </main>
    </div>
  );
};

export default Home;
