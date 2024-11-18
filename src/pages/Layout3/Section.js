import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Business from "../../assets/images/home/Business.mp4";
import { Col, Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Section = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <section className="bg-home3" id="home">
        <video autoPlay muted loop id="myVideo">
          <source src={Business} type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center text-white">
                <h6 className="sub-title mb-3">zoric Template</h6>
                <h1 className="mb-4">
                  We are Startup Creative{" "}
                  <span className="text-primary">zoric</span> Agency
                </h1>
                <p className="text-white-50 fs-17">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
                <div className="mt-4">
                  <Link to="/#" className="btn btn-primary mt-2">
                    Learn More
                  </Link>{" "}
                  <Button
                    color="primary"
                    className="ms-sm-1 image-popup mt-2"
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
        </Container>
      </section>
      <div className="position-relative">
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1440"
            height="150"
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
          >
            <g mask='url("#SvgjsMask1022")' fill="none">
              <path
                d="M 0,58 C 144,73 432,131.8 720,133 C 1008,134.2 1296,77.8 1440,64L1440 250L0 250z"
                fill="rgba(255, 255, 255, 1)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1022">
                <rect width="1440" height="250" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
      <ModalVideo
        channel="vimeo"
        videoId="287684225"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </React.Fragment>
  );
};

export default Section;
