import React from "react";
import { Col, Container, Row } from "reactstrap";

import img01 from "../assets/images/feature/img-01.png";
import img02 from "../assets/images/feature/img-02.png";
import img03 from "../assets/images/feature/img-03.png";
import img04 from "../assets/images/feature/img-04.png";
import img05 from "../assets/images/feature/img-05.png";
import img06 from "../assets/images/feature/img-06.png";

const ServicesCard = (props) => {
  return (
    <>
      <Col lg={4} md={6}>
        <div
          className={
            props.isShadow
              ? "service-box text-center mt-4 box-shadow"
              : "service-box text-center mt-4"
          }
        >
          <img src={props.imgsrc} alt="" className="img-fluid" />
          <h5 className="fs-18 mt-4">{props.title}</h5>
          <div className="lighlight-border mt-3"></div>
          <p className="text-muted mt-3">{props.caption}</p>
        </div>
      </Col>
      {/* <!--end col--> */}
    </>
  );
}

// Services data

const ServicesData = [
  {
    imgsrc: img01,
    title: "Web design",
    caption:
      "Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  },
  {
    imgsrc: img02,
    title: "Development",
    caption:
      "Due to its widespread use as filler text for layouts, non-readability is of great importance.",
    isShadow: true,
  },
  {
    imgsrc: img03,
    title: "Branding",
    caption:
      "There are many variations of passages of available, but the majority alteration in some form.",
  },
  {
    imgsrc: img04,
    title: "Easy to customize",
    caption:
      "The generated Lorem Ipsum is therefore always free from repetition, injected humour.",
    isShadow: true,
  },
  {
    imgsrc: img05,
    title: "Unrivaled Quality",
    caption:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    imgsrc: img06,
    title: "Online Marketing",
    caption:
      "This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.",
    isShadow: true,
  },
];

const Services = () => {
  return (
    <>
      <section className="section" id="services">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}> 
              <div className="header-title text-center">
                <p className="text-uppercase text-muted mb-2">
                  Services We're Provided
                </p>
                <h3>We do all Creative Services</h3>
                <div className="title-border mt-3"></div>
                <p className="text-muted mt-3">
                  We craft digital, graphic and dimensional thinking, to create
                  category leading brand experiences that have meaning and add a
                  value.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* Services Component Start */}

            {ServicesData.map((value, idx) => (
              <ServicesCard
                key={idx}
                imgsrc={value.imgsrc}
                title={value.title}
                caption={value.caption}
                isShadow={value.isShadow}
              />
            ))}

            {/* Services Component End */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
