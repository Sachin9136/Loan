import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnerCarousel.css";

function AutoPlay() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="slider-container py-5">
                        <Slider className="partners_img" {...settings}>
                            <div>
                            <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="logo1" />
                            </div>
                            <div>
                            <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="logo3" />
                            </div>
                            <div>
                            <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="logo4" />
                            </div>
                            <div>
                            <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="logo5" />
                            </div>
                            <div>
                            <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="logo6" />
                            </div>
                            <div>
                            <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="logo7" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default AutoPlay;
  

