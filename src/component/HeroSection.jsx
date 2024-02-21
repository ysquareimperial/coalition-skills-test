import React from "react";
import { Col, Row } from "reactstrap";
import logo from "../assets/images/Logo-min.png";
function HeroSection() {
  return (
    <div className="hero_">
      <Row className="m-0">
        <Col md={2}></Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-between p-3 nav_"
        >
          <img src={logo} alt="" className="logo" />
          <div className="d-flex text-white gap-4 tabs">
            <a className="nav_item nav_item_1">01. HISTORY</a>
            <a className="nav_item">02. TEAM</a>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}

export default HeroSection;
