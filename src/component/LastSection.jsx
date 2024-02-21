import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import logo from "../assets/images/Logo-min.png";
function LastSection() {
  const [mountain, setMountain] = useState(false);
  const toggle = () => {
    setMountain(!mountain);
  };
  return (
    <div className="last_sec">
      <div className="mountain_1_2">
        <Row className="m-0">
          <Col md={2}></Col>
          <Col md={8} className="d-flex">
            <p
              className={!mountain ? "mountain_p_1" : "not_active"}
              onClick={toggle}
            >
              MOUNTAIN 1
            </p>
            <p
              className={mountain ? "mountain_p_1" : "not_active"}
              onClick={toggle}
            >
              MOUNTAIN 2
            </p>
          </Col>
        </Row>
      </div>

      <Row className="m-0">
        <Col md={2}></Col>
        <Col md={8} className=" m-3">
          {!mountain && (
            <div className="schedule">
              <p className="sch_head m-0">SCHEDULE</p>
              <div className="d-flex gap-5">
                <div>
                  <p className="m-0">18 Dec 2016</p>
                  <p>7 Jan 2017</p>
                  <p className="">25 Nov 2016</p>
                  <p>28 Nov 2016</p>
                </div>
                <div>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                </div>
              </div>
            </div>
          )}
          {mountain && (
            <div className="schedule">
              <p className="sch_head m-0">SCHEDULE2</p>
              <div className="d-flex gap-5">
                <div>
                  <p className="m-0">25 Nov 2016</p>
                  <p>28 Nov 2016</p>
                  <p>18 Dec 2016</p>
                  <p>7 Jan 2017</p>
                </div>
                <div>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                  <p>Vestibulum viverra</p>
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}

export default LastSection;
