import React from "react";
import textLogo from "../assets/images/Logowith text-min.png";
import { Col, Row } from "reactstrap";

function SectionDivider() {
  return (
    <Row className="m-0">
      <Col md={2}></Col>
      <Col
        md={8}
        className="d-flex align-items-center justify-content-between p-3 nav_"
      >
        <img src={textLogo} alt="" className="text_logo" />
        <div className="d-flex text-white gap-4 tabs">
          <a href="#history" className="sec_item">
            01. HISTORY
          </a>
          <a href="#team" className="sec_item">
            02. TEAM
          </a>
        </div>
      </Col>

      <Col md={2}></Col>
    </Row>
  );
}

export default SectionDivider;
