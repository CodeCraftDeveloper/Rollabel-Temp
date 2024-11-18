import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import { Button, Col, Container, Row } from "reactstrap";

import img1 from "../../assets/images/home/home6-1.png";
import img2 from "../../assets/images/home/home6-2.png";
import img3 from "../../assets/images/home/home6-3.png";
import img4 from "../../assets/images/home/home6-4.png";
import img5 from "../../assets/images/home/home6-5.png";

const images = [img1, img2, img3, img4, img5];

const Section = () => {
  const [isOpen, setOpen] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </div>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 300,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <section className="bg-home6" id="home">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="text-center">
              <h6 className="sub-title mb-3">zoric Template</h6>
              <h1 className="mb-4">Build fast, released quickly</h1>
              <p className="text-muted fs-17">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap v5 html page.
              </p>
              <div className="mt-4 pt-2">
                <Button
                  color="primary"
                  className="ms-lg-1 image-popup"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-video icons"
                  >
                    {" "}
                    <g>
                      {" "}
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>{" "}
                      <rect
                        x="1"
                        y="5"
                        width="15"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>{" "}
                    </g>{" "}
                  </svg>{" "}
                  Watch Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Swiper Start */}
        <Row className="mt-4 pt-3">
          <Col lg={12}>
            <div className="swiper-container homeslider pb-5">
              <div className="swiper-wrapper mt-4">
                <Slider {...settings}>
                  {images.map((item, key) => (
                    <div
                      key={key}
                      className={
                        key === imageIndex
                          ? "layslide activeLaySlide"
                          : "layslide"
                      }
                    >
                      <img src={item} alt={item} className="img-fluid" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalVideo
                   channel="vimeo"
                   videoId="287684225"
                  autoplay
                  isOpen={isOpen}
                  onClose={() => setOpen(false)}
                />
    </section>
  );
};

export default Section;
