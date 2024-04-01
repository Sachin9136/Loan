import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div>
      <main>
  {/* Hero Start*/}
  <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="hero-cap text-center pt-50">
            <h2>About us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Hero End */}
  {/* About Law Start*/}
  <div className="about-low-area section-padding2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="about-caption mb-50">
            {/* Section Tittle */}
            <div className="section-tittle mb-35">
              <span>About Our Company</span>
              <h2>Building a Brighter financial Future &amp; Good Support.</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut eniminixm,
              quis nostrud exercitation ullamco laboris nisi ut aliquip
              exeaoauat. Duis aute irure dolor in reprehe.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod
              tempor incididunt ut labore et dolore magna aliq.
            </p>
            <Link to="apply" className="btn">
              Apply for Loan
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          {/* about-img */}
          <div className="about-img ">
            {/* <div className="about-font-img d-none d-lg-block">
              <img src="assets/img/gallery/about2.jpg" alt="" />
            </div> */}
            <div className="about-back-img ">
              <img src="assets/img/gallery/about2.jpg" alt="" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Law End*/}
  {/* Support Company Start*/}
  <div className="support-company-area section-padding3 fix">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="support-location-img mb-50">
            <img src="assets/img/gallery/single2.jpg" alt=""/>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <div className="select-suport-items">
                <label className="single-items">
                  Aorem ipsum dgolor sitnfd amet dfgbn fbsdg
                  <input type="checkbox" defaultChecked="checked active" />
                  <span className="checkmark" />
                </label>
                <label className="single-items">
                  Consectetur adipisicing bfnelit, sedb dvbnfo
                  <input type="checkbox" defaultChecked="checked active" />
                  <span className="checkmark" />
                </label>
                <label className="single-items">
                  Eiusmod tempor incididunt vmgldupout labore
                  <input type="checkbox" defaultChecked="checked active" />
                  <span className="checkmark" />
                </label>
                <label className="single-items">
                  Admkde mibvnim veniam, quivds cnostrud.
                  <input type="checkbox" defaultChecked="checked active" />
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
</main>

    </div>
  )
}

export default About
