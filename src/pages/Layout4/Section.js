import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import download from "../../assets/images/download.png";

const Section = () => {
  return (
    <React.Fragment>
      <section className="bg-home4 overflow-hidden" id="home">
        <Container>
          <div className="position-relative" style={{ zIndex: "1" }}>
            <Row className="align-items-center">
              <Col xl={6}>
                <div>
                  <h6 className="sub-title mb-3">Zoric Template</h6>
                  <h1 className="mb-4">
                    Help your <span className="text-primary">Startup</span>{" "}
                    Growth up to high level
                  </h1>
                  <p className="text-black-50 fs-17">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="/#" className="btn btn-primary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <div className="mt-4 mt-lg-0">
                  <img src={download} alt="home-4" className="home-img" />
                </div>
              </Col>
            </Row>
          </div>
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
            viewBox="0 0 1440 250"
          >
            <g mask='url("#SvgjsMask1036")' fill="none">
              <path
                d="M 0,214 C 96,194 288,120.8 480,114 C 672,107.2 768,201.4 960,180 C 1152,158.6 1344,41.6 1440,7L1440 250L0 250z"
                fill="rgba(255, 255, 255, 1)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1036">
                <rect width="1440" height="250" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
