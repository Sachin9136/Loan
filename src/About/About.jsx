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
          <div className="hero-cap text-center pt-50 underline">
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
            For all of your financial needs, including balance transfers, credit cards, business loans, personal loans, and home loans, Loan Service Point is a cutting-edge one-stop shop.
            </p>
            <p>
            One of the top credit lending companies in India, Loan Service Point is present throughout more than 2000 cities and was established by professionals and financial experts with over 25 years of experience, who have built a solid reputation by meeting the demands of over 10 lakh customers. Our highly skilled in-house Loan Calculator algorithm enables us to provide you with the greatest discounts and possibilities for the loan or financial product of your choosing. Our algorithmic engines work for you by utilizing solid factual data derived from the most recent relative market changes and a determined forecast of future trends.
            </p>
            <p>
              Get in touch with us so we can assist you in making wise financial decisions.
            </p>
            <Link to="apply" className="btn">
              Apply for Loan
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          {/* about-img */}
          <div className="about-img ">
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
          <div className="support-location-img mb-50 d-flex justify-content-center">
            <img src="assets/img/gallery/single2.jpg" alt=""/>
            {/* <div className="support-img-cap">
              <span>Since 1992</span>
            </div> */}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="right-caption">
            {/* Section Tittle */}
            <div className="section-tittle">
              <span>Why Choose Our Company</span>
              <h2>Giving our clients sound financial advice empowers them.</h2>
            </div>
            <div className="support-caption">
              <p>
              "Instilling sound financial knowledge in our clients and providing the greatest services to those in need of credit assistance remains our value, motto, and mission. By utilizing cutting-edge technologies, we strive to establish a financial landscape that allows us to cater to a broad range of customers. As part of our "help you borrow right" objective, our primary goal is still to disseminate moral knowledge and close the gap that exists between legitimate lenders and loan seekers.
              </p>
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
