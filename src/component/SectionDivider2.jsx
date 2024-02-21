import React from "react";
import { Col, Row } from "reactstrap";

function SectionDivider2() {
  return (
    <Row className="m-0 climb_" id="team">
      <Col md={2}></Col>
      <Col
        md={8}
        className="d-flex align-items-center justify-content-between p-3"
      >
        <div
          className="d-flex align-items-center section_2_text"
          style={{ gap: 110 }}
        >
          <div className="text_wrapper">
            <p className="num_one">02.</p>
            <p className=" climb__">CLIMB</p>
          </div>
          <p className="climb_text">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}

export default SectionDivider2;
