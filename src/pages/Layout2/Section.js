import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const FeatureCard = (props) => {
  return (
    <>
      <Col lg={4} md={6}>
        <div className="feature-box mt-3 mt-lg-0">
          <div className="d-flex">
            <div className="feature-icon flex-shrink-0">
              <i className={props.iconClass}></i>
            </div>
            <div className="feature-content ms-3 flex-grow-1">
              <h6 className="fs-17 mb-1">{props.title}</h6>
              <p className="text-muted mb-0">{props.caption}</p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

const FeatureData = [
  {
    iconClass: "uil uil-analytics",
    title: "Analysis",
    caption: "Category leading brand experiences that have meaning.",
  },
  {
    iconClass: "uil uil-crosshair",
    title: "Strategy",
    caption: "Category leading brand experiences that have meaning.",
  },
  {
    iconClass: "uil uil-search",
    title: "Research",
    caption: "Category leading brand experiences that have meaning.",
  },
];

const Section = () => {
  return (
    <React.Fragment>
      <section className="bg-home2" id="home">
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
                <h5 className="sub-title text-uppercase mb-3 text-white">
                  Zoric Template
                </h5>
                <h1 className="text-white mb-4">
                  {" "}
                  Powerfull analytics tools for your business
                </h1>
                <p className="text-white-50 fs-17">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap v5 html
                  page.
                </p>
                <div className="mt-4 pt-2">
                  <Link to="/#" className="btn btn-primary">
                    Get Started Now
                  </Link>
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
      {/* <!-- END HOME --> */}

      {/* <!-- START FEATURE --> */}
      <Container>
        <div className="bg-feature">
          <Row className="justify-content-center">
            {/* Feature Start */}
            {FeatureData.map((item, key) => (
              <FeatureCard
                key={key}
                iconClass={item.iconClass}
                title={item.title}
                caption={item.caption}
              />
            ))}
            {/* Feature End */}
          </Row>
        </div>
        {/* <!--end bg-feature--> */}
      </Container>
    </React.Fragment>
  );
};

export default Section;
