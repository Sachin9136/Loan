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
                            <span>Sachin Gupta </span>
                            <p>Director</p>
                            </div>
                        </div>
                        <div className="testimonial-top-cap">
                            <p>
                            Quick and hassle-free loan approval. Transparent process and competitive rates. Highly satisfied with their services.
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
                            <span>Rajesh Patel </span>
                            <p>Co Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-top-cap">
                            <p>
                            Exceptional support and guidance throughout. Secured a loan effortlessly. Recommend to anyone seeking financial assistance.
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
                            <span>Amit Kumar </span>
                            <p>Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-top-cap">
                            <p>
                            Reliable and trustworthy. Their expertise helped me navigate complex loan options, ensuring the best deal. Grateful for their assistance.
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
  