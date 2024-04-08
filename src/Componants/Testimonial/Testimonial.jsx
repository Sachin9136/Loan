import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testomonial.css";

function AutoPlay() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 9000,
      cssEase: "linear"
    };
    return (
      <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="h1-testimonial-active">
                    <div className="single-testimonial text-center">
                        <div className="testimonial-caption ">
                        <div className="testimonial-founder d-flex align-items-center justify-content-center mb-3">
                            <div className="founder-img">
                                <img src="assets/img/testmonial/Homepage_testi.png" alt="" />
                            </div>
                            <div className="founder-text">
                            <span>Sachin1 </span>
                            <p>Co Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-top-cap">
                            <p>
                            Navigating the loan process with this website was a
                            game-changer for me. Their platform made it incredibly simple
                            to compare options and apply.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="h1-testimonial-active">
                    <div className="single-testimonial text-center">
                        <div className="testimonial-caption ">
                        <div className="testimonial-founder d-flex align-items-center justify-content-center mb-3">
                            <div className="founder-img">
                            <img src="assets/img/testmonial/Homepage_testi.png" alt="" />
                            </div>
                            <div className="founder-text">
                            <span>Sachin2 </span>
                            <p>Co Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-top-cap">
                            <p>
                            Navigating the loan process with this website was a
                            game-changer for me. Their platform made it incredibly simple
                            to compare options and apply.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="h1-testimonial-active">
                    <div className="single-testimonial text-center">
                        <div className="testimonial-caption ">
                        <div className="testimonial-founder d-flex align-items-center justify-content-center mb-3">
                            <div className="founder-img">
                            <img src="assets/img/testmonial/Homepage_testi.png" alt="" />
                            </div>
                            <div className="founder-text">
                            <span>Sachin3 </span>
                            <p>Co Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-top-cap">
                            <p>
                            Navigating the loan process with this website was a
                            game-changer for me. Their platform made it incredibly simple
                            to compare options and apply.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
  }
  
  export default AutoPlay;
  