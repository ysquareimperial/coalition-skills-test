import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "reactstrap";
import logo from "../assets/images/Logo-min.png";
function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("fasfas");
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    };
  }, []);
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
            <a href="#history" className="nav_item nav_item_1">
              01. HISTORY
            </a>
            <a href="#team" className="nav_item">
              02. TEAM
            </a>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <div className="p-4">
            <p>I built the single-page site using React coupled with Vite.</p>
            <p>
              The source code is available on my{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href=" https://github.com/ysquareimperial/coalition-skills-test"
              >
                <b>Github profile</b>
              </a>{" "}
              profile.
            </p>
            <p>
              Access the site through this{" "}
              <a rel="noreferrer" target="_blank" href="">
                <b>link</b>
              </a>
            </p>

            <button className="btn btn-light">
              <b>Close</b>
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default HeroSection;
