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
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    };
    return (
       <div className="bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center pt-5">Obtain Credit From More Than <span className="number-color">200</span> Providers</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 pb-5">
                    <div className="slider-container py-5">
                        <Slider className="partners_img" {...settings}>
                            <div>
                            <img src="https://logowik.com/content/uploads/images/hero-motocorp-horizontal9418.logowik.com.webp" alt="logo1" />
                            </div>
                            <div>
                            <img src="https://i.ytimg.com/vi/wO0JE57x7zY/hqdefault.jpg" alt="logo3" />
                            </div>
                            <div>
                            <img src="https://static.wikia.nocookie.net/logopedia/images/9/9a/Essel_Finance.jpg" alt="logo4" />
                            </div>
                            <div>
                            <img src="https://www.kindpng.com/picc/m/145-1455211_limited-offer-png-transparent-images-kotak-mahindra-bank.png" alt="logo5" />
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcwFmcJ7W10OER0PE_5_m7YkKVl5GCsTnGQnkBeUe5g&s" alt="logo6" />
                            </div>
                            <div>
                            <img src="https://i.pinimg.com/originals/c8/d8/56/c8d856fdbeadcf97552c464d84fce08b.png" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5j-_wA0tDiUi50HEaMx1lPgbGAbC69_rEO9IolHedZTKXcL3ohgNdRqIVwxofKToLik&usqp=CAU" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD638fYb36N5olTPxC1ZgnsQUYWcWI_YLI0ryEufTFuw&s" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://1000logos.net/wp-content/uploads/2021/05/IDBI-Bank-logo.png" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Bajaj-Finserv-Logo.jpg" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tata_Capital_Logo-01.jpg/1200px-Tata_Capital_Logo-01.jpg" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4J8MeDDrrHwWYm1g30-HGSzdaIQcA2PPQDA2tMc_A4Q&s" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_WsD2kWLHzAWdvcoQNWZVgI18MNlJi7jWOON0VwWuQ&s" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://startupstorymedia.com/wp-content/uploads/2022/12/IIFL_1.jpg" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://images.livemint.com/img/2023/02/08/600x338/Lendingkart-logo_1200X630_1675871999078_1675872005438_1675872005438.png" alt="logo7" />
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9Ri8PEK_etP0Ps-CyLxuJihW_3zLO1KtVT-ayum8KQ&s" alt="logo7" />
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
  }
  
  export default AutoPlay;
  

