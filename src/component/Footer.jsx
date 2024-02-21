import React from "react";
import footerLogo from "../assets/images/LOSANGELESCOLORED-min.png";
import { Col, Row } from "reactstrap";

function Footer() {
  return (
    <div className="footer_">
      <Row className="m-0">
        <Col md={2}></Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-between p-3 footer_content"
        >
          <img src={footerLogo} alt="footer_logo" className="footer_logo" />

          <p className="copyright_text m-0">
            COPYRIGHT 2016. ALL RIGHTS RESERVED.
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}

export default Footer;
