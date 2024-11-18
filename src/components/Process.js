import React from "react";
import { Col, Container, Row } from "reactstrap";

const ProcessCard = (props) => {
  return (
    <React.Fragment>
      <Col lg={3} md={6}>
        <div className={props.number !== "04" ? "process-box process-border text-center" : "process-box text-center"}>
          <div className="process-count text-white mt-4">
            <h3 className="process-number">{props.number}</h3>
          </div>

          <div className="process-content bg-light mt-5 rounded p-4">
            <h5 className="fs-18">{props.step}</h5>
            <p className="text-muted mb-0">{props.caption}</p>
          </div>
        </div>
        {/* <!--end process-box--> */}
      </Col>
    </React.Fragment>
  );
}

// Process Data

const ProcessData = [
  {
    number: "01",
    step: "Concept",
    caption: "It is a long established fact that a reader at its layout.",
  },
  {
    number: "02",
    step: "Plan",
    caption: "It is a long established fact that a reader at its layout.",
  },
  {
    number: "03",
    step: "Design",
    caption: "It is a long established fact that a reader at its layout.",
  },
  {
    number: "04",
    step: "Development",
    caption: "It is a long established fact that a reader at its layout.",
  },
];

const Process = () => {
  return (
    <React.Fragment>
      <section className="bg-process section" id="process">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="header-title text-center">
                <h3>Our Process</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  We craft digital, graphic and dimensional thinking, to create
                  category leading brand experiences that have meaning and add a
                  value.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-2">
            {/* Process Component Start */}

            {ProcessData.map((value, idx) => (
              <ProcessCard
                key={idx}
                number={value.number}
                step={value.step}
                caption={value.caption}
                isShow={value.isShow}
              />
            ))}

            {/* Process Component End */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Process;
